import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Network, Copy, Check, Cpu } from 'lucide-react';

export const SubnetWorkbench: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].lab;

  const [ipAddress, setIpAddress] = useState('172.16.20.50');
  const [cidr, setCidr] = useState(26);
  const [copied, setCopied] = useState(false);

  // Preset networks for quick inspection
  const presets = [
    { label: 'LAN Subnet (/24)', ip: '192.168.1.1', cidr: 24 },
    { label: 'Enterprise Segment (/26)', ip: '172.16.20.50', cidr: 26 },
    { label: 'Cloud VPC Block (/20)', ip: '10.0.0.0', cidr: 20 },
    { label: 'Point-to-Point WAN (/30)', ip: '10.255.0.1', cidr: 30 },
  ];

  const calculations = useMemo(() => {
    try {
      const octets = ipAddress.split('.').map((o) => parseInt(o, 10));
      if (octets.length !== 4 || octets.some((o) => isNaN(o) || o < 0 || o > 255)) {
        return null;
      }

      const ipInt = ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0;
      const maskInt = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
      const wildcardInt = (~maskInt) >>> 0;
      const netInt = (ipInt & maskInt) >>> 0;
      const bcastInt = (netInt | wildcardInt) >>> 0;

      const intToIp = (num: number) =>
        [(num >>> 24) & 255, (num >>> 16) & 255, (num >>> 8) & 255, num & 255].join('.');

      const intToOctetArray = (num: number) => [
        (num >>> 24) & 255,
        (num >>> 16) & 255,
        (num >>> 8) & 255,
        num & 255,
      ];

      const intToBinaryOctets = (num: number) =>
        intToOctetArray(num).map((b) => b.toString(2).padStart(8, '0'));

      const totalHosts = Math.pow(2, 32 - cidr);
      const usableHosts = cidr >= 31 ? (cidr === 31 ? 2 : 1) : Math.max(0, totalHosts - 2);

      const firstHostInt = cidr >= 31 ? netInt : netInt + 1;
      const lastHostInt = cidr >= 31 ? bcastInt : bcastInt - 1;

      let ipClass = 'Classless (CIDR)';
      if (octets[0] >= 1 && octets[0] <= 126) ipClass = `${t.classLabel} A`;
      else if (octets[0] >= 128 && octets[0] <= 191) ipClass = `${t.classLabel} B`;
      else if (octets[0] >= 192 && octets[0] <= 223) ipClass = `${t.classLabel} C`;
      else if (octets[0] >= 224 && octets[0] <= 239) ipClass = `${t.classLabel} D (Multicast)`;
      else if (octets[0] >= 240 && octets[0] <= 255) ipClass = `${t.classLabel} E (Experimental)`;

      return {
        ip: ipAddress,
        cidr,
        subnetMask: intToIp(maskInt),
        wildcardMask: intToIp(wildcardInt),
        networkAddress: intToIp(netInt),
        broadcastAddress: intToIp(bcastInt),
        firstHost: intToIp(firstHostInt),
        lastHost: intToIp(lastHostInt),
        usableHosts: usableHosts.toLocaleString(),
        totalAddresses: totalHosts.toLocaleString(),
        ipClass,
        binaryIp: intToBinaryOctets(ipInt),
        binaryMask: intToBinaryOctets(maskInt),
        binaryNet: intToBinaryOctets(netInt),
        binaryBcast: intToBinaryOctets(bcastInt),
      };
    } catch {
      return null;
    }
  }, [ipAddress, cidr, t.classLabel]);

  const handleCopySummary = () => {
    if (!calculations) return;
    const summary = `Subnet Calculation for ${calculations.ip}/${calculations.cidr}
Subnet Mask: ${calculations.subnetMask}
Network ID: ${calculations.networkAddress}
Usable Host Range: ${calculations.firstHost} - ${calculations.lastHost}
Broadcast Address: ${calculations.broadcastAddress}
Usable Hosts: ${calculations.usableHosts}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lab" className="py-20 border-b border-[var(--border-main)] relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[var(--border-main)]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-wider">
              <Network className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm max-w-2xl font-normal">
              {t.subtitle}
            </p>
          </div>

          {calculations && (
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 backdrop-blur-md border border-orange-500/30 hover:border-orange-500/50 text-xs font-mono text-orange-600 dark:text-orange-400 transition-colors self-start md:self-auto shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-orange-500" />}
              <span>{copied ? t.copySuccess : t.copySummaryBtn}</span>
            </button>
          )}
        </div>

        {/* Workbench Body */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Controller & Presets */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Input Card in Clean Transparent Glass with Orange Accent */}
            <div className="p-6 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-orange-500/20 space-y-5 relative">
              <div className="flex items-center justify-between pb-3 border-b border-orange-500/15">
                <span className="text-xs font-mono text-[var(--text-main)] font-semibold uppercase">{t.ipLabel} &amp; CIDR</span>
                <span className="text-xs font-mono text-orange-500 font-bold">/{cidr}</span>
              </div>

              {/* IP Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)]">{t.ipLabel}</label>
                <input
                  type="text"
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  className="w-full bg-black/[0.02] dark:bg-white/[0.03] border border-orange-500/25 rounded-xl px-3.5 py-2.5 text-sm font-mono text-[var(--text-main)] focus:outline-none focus:border-orange-500/60"
                  placeholder="192.168.1.1"
                />
              </div>

              {/* CIDR Range Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--text-muted)]">{t.cidrLabel}</span>
                  <span className="font-bold text-orange-500">/{cidr}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="32"
                  value={cidr}
                  onChange={(e) => setCidr(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-500 cursor-pointer h-2 bg-black/10 dark:bg-white/10 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--text-dim)]">
                  <span>/1</span>
                  <span>/24 (LAN)</span>
                  <span>/32 (Host)</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="space-y-2 pt-2 border-t border-orange-500/15">
                <span className="text-[11px] font-mono text-[var(--text-dim)] uppercase">{t.presetLabel}</span>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => {
                        setIpAddress(preset.ip);
                        setCidr(preset.cidr);
                      }}
                      className="p-2.5 rounded-xl bg-orange-500/[0.03] hover:bg-orange-500/15 border border-orange-500/20 hover:border-orange-500/40 text-left text-xs font-mono transition-colors"
                    >
                      <div className="text-[var(--text-main)] font-semibold">{preset.label}</div>
                      <div className="text-[10px] text-orange-500">{preset.ip}/{preset.cidr}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Architectural Note */}
            <div className="p-4 rounded-xl bg-white/10 dark:bg-white/[0.04] backdrop-blur-xl border border-white/20 dark:border-white/10 space-y-1.5 text-xs shadow-xs">
              <div className="text-[var(--text-main)] font-mono font-semibold text-[11px] uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-orange-500" />
                <span>Bitwise Engine Shift Logic</span>
              </div>
              <p className="text-[var(--text-muted)] font-sans leading-relaxed text-xs">
                {lang === 'id'
                  ? 'Operasi bitwise biner 32-bit: mask = (~0 << (32 - cidr)) >>> 0 dan menghasilkan Network ID dengan (ipInt & maskInt).'
                  : 'Operates using 32-bit bitwise shifts: mask = (~0 << (32 - cidr)) >>> 0 and derives Network ID with (ipInt & maskInt).'}
              </p>
            </div>

          </div>

          {/* Right Column: Calculations & 32-bit Binary Matrix */}
          <div className="lg:col-span-7 space-y-6">
            
            {calculations ? (
              <div className="space-y-6">
                
                {/* Primary Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-black/10 dark:border-white/10">
                    <div className="text-[11px] font-mono text-[var(--text-dim)] uppercase">{t.subnetMask}</div>
                    <div className="text-sm font-bold font-mono text-[var(--text-main)] mt-1">{calculations.subnetMask}</div>
                    <div className="text-[10px] font-mono text-orange-500 mt-0.5">/{calculations.cidr}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-black/10 dark:border-white/10">
                    <div className="text-[11px] font-mono text-[var(--text-dim)] uppercase">{t.usableHosts}</div>
                    <div className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">{calculations.usableHosts}</div>
                    <div className="text-[10px] font-mono text-[var(--text-dim)] mt-0.5">/{calculations.totalAddresses} total</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-black/10 dark:border-white/10">
                    <div className="text-[11px] font-mono text-[var(--text-dim)] uppercase">{t.networkId}</div>
                    <div className="text-sm font-bold font-mono text-amber-500 mt-1">{calculations.networkAddress}</div>
                    <div className="text-[10px] font-mono text-[var(--text-dim)] mt-0.5">{calculations.ipClass}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-black/10 dark:border-white/10">
                    <div className="text-[11px] font-mono text-[var(--text-dim)] uppercase">{t.broadcastIp}</div>
                    <div className="text-sm font-bold font-mono text-orange-500 mt-1">{calculations.broadcastAddress}</div>
                    <div className="text-[10px] font-mono text-[var(--text-dim)] mt-0.5">Wild: {calculations.wildcardMask}</div>
                  </div>
                </div>

                {/* Usable Range Box */}
                <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                  <div>
                    <span className="text-[var(--text-dim)] text-[11px] block">{t.usableRange}</span>
                    <span className="text-[var(--text-main)] font-bold text-sm">
                      {calculations.firstHost} <span className="text-orange-500">&rarr;</span> {calculations.lastHost}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/5 text-[var(--text-muted)] text-xs border border-black/10 dark:border-white/10">
                    Wildcard: {calculations.wildcardMask}
                  </span>
                </div>

                {/* 32-Bit Octet Binary Visualization */}
                <div className="p-5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md border border-black/10 dark:border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/10">
                    <span className="text-xs font-mono text-[var(--text-main)] font-semibold uppercase">
                      {t.binaryBreakdown}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-dim)]">4 Octets &times; 8 Bits</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {/* IP Octets */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                        <span>IP Address ({calculations.ip})</span>
                        <span className="text-[var(--text-dim)]">Decimal to Binary</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                        {calculations.binaryIp.map((oct, i) => (
                          <div key={i} className="py-2 px-1 rounded-lg bg-white/5 dark:bg-black/20 text-center border border-white/15 dark:border-white/5 text-[var(--text-main)] font-semibold text-[11px] sm:text-xs tracking-wider">
                            {oct}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subnet Mask Octets */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                        <span>{t.subnetMask} ({calculations.subnetMask})</span>
                        <span className="text-orange-500 font-semibold">/{calculations.cidr}</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                        {calculations.binaryMask.map((oct, i) => (
                          <div key={i} className="py-2 px-1 rounded-lg bg-white/5 dark:bg-black/20 text-center border border-white/15 dark:border-white/5 text-orange-500 font-semibold text-[11px] sm:text-xs tracking-wider">
                            {oct}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Network ID Octets */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                        <span>{t.networkId} ({calculations.networkAddress})</span>
                        <span className="text-amber-500 font-semibold">Bitwise (IP &amp; Mask)</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                        {calculations.binaryNet.map((oct, i) => (
                          <div key={i} className="py-2 px-1 rounded-lg bg-white/5 dark:bg-black/20 text-center border border-white/15 dark:border-white/5 text-amber-500 font-semibold text-[11px] sm:text-xs tracking-wider">
                            {oct}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="p-10 rounded-2xl bg-white/10 dark:bg-white/[0.04] backdrop-blur-xl border border-red-500/30 text-center text-red-500 font-mono text-sm">
                {lang === 'id'
                  ? 'Format Alamat IPv4 tidak valid. Masukkan 4 oktet desimal (0-255).'
                  : 'Invalid IPv4 Address Format. Please provide 4 valid octets (0-255).'}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
