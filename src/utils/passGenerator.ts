export interface PassDetails {
  name: string;
  tier: string;
  passId: string;
  college?: string;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function generateAndDownloadPassSvg({
  name,
  tier,
  passId,
  college = 'ITER, Siksha \'O\' Anusandhan',
}: PassDetails): void {
  const cleanName = escapeXml((name.trim() || 'STUDENT BUILDER').toUpperCase());
  const cleanTier = escapeXml((tier.trim() || 'STUDENT DEVELOPER PASS').toUpperCase());
  const cleanPassId = escapeXml(passId.startsWith('#') ? passId : `#${passId}`);
  const cleanCollege = escapeXml(college);

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="600" height="960" viewBox="0 0 600 960" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="topSpotlight" cx="50%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#4285F4" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#0F0F10" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="cardSheen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.01"/>
    </linearGradient>
    <filter id="cardShadow" x="-20" y="-20" width="640" height="1000" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect x="20" y="20" width="560" height="920" rx="20" fill="#0F0F10" filter="url(#cardShadow)"/>
  <rect x="20" y="20" width="560" height="920" rx="20" fill="url(#topSpotlight)"/>
  <rect x="20" y="20" width="560" height="920" rx="20" fill="url(#cardSheen)"/>
  <rect x="20" y="20" width="560" height="920" rx="20" stroke="#27272A" stroke-width="2"/>
  <rect x="32" y="32" width="536" height="896" rx="14" stroke="#4285F4" stroke-opacity="0.25" stroke-width="1"/>

  <!-- Top Header Strip -->
  <g transform="translate(60, 68)">
    <!-- Brackets Mini Logo -->
    <rect x="0" y="4" width="22" height="8" rx="4" transform="rotate(45 0 4)" fill="#EA4335" />
    <rect x="-14" y="26" width="22" height="8" rx="4" transform="rotate(-45 -14 26)" fill="#4285F4" />
    <rect x="18" y="18" width="22" height="8" rx="4" transform="rotate(-45 18 18)" fill="#34A853" />
    <rect x="32" y="10" width="22" height="8" rx="4" transform="rotate(45 32 10)" fill="#FBBC05" />

    <text x="64" y="16" fill="#F4F4F5" font-family="'Space Grotesk', -apple-system, sans-serif" font-size="18" font-weight="700">GDG @ SOA ITER</text>
    <text x="64" y="32" fill="#71717A" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="500">Google Developer Group Chapter</text>

    <!-- Active Dot -->
    <circle cx="450" cy="18" r="4" fill="#34A853"/>
    <text x="440" y="22" text-anchor="end" fill="#34A853" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600">CONFIRMED</text>
  </g>

  <!-- Divider Line -->
  <line x1="50" y1="130" x2="550" y2="130" stroke="#27272A" stroke-width="1"/>

  <!-- Event Title -->
  <text x="300" y="180" text-anchor="middle" fill="#71717A" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" letter-spacing="3">OFFICIAL DELEGATE PASS</text>
  <text x="300" y="224" text-anchor="middle" fill="#F4F4F5" font-family="'Space Grotesk', sans-serif" font-size="34" font-weight="700">TEKNO KRRAFT 2026</text>
  <text x="300" y="250" text-anchor="middle" fill="#4285F4" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600">OCTOBER 16 – 18, 2026</text>

  <!-- Center GDG Emblem -->
  <g transform="translate(195, 290)">
    <rect x="48" y="8" width="50" height="20" rx="10" transform="rotate(45 48 8)" fill="#EA4335" />
    <rect x="12" y="62" width="50" height="20" rx="10" transform="rotate(-45 12 62)" fill="#4285F4" />
    <rect x="74" y="44" width="50" height="20" rx="10" transform="rotate(-45 74 44)" fill="#34A853" />
    <rect x="110" y="26" width="50" height="20" rx="10" transform="rotate(45 110 26)" fill="#FBBC05" />
  </g>

  <!-- Attendee Details Box -->
  <g transform="translate(60, 460)">
    <rect x="0" y="0" width="480" height="220" rx="12" fill="#18181B" stroke="#27272A" stroke-width="1"/>

    <text x="24" y="38" fill="#71717A" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">DELEGATE NAME</text>
    <text x="24" y="74" fill="#F4F4F5" font-family="'Space Grotesk', sans-serif" font-size="26" font-weight="700">${cleanName}</text>

    <text x="24" y="116" fill="#71717A" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">ACCESS ARENA / TRACK</text>
    <text x="24" y="142" fill="#4285F4" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="600">${cleanTier}</text>

    <text x="24" y="180" fill="#71717A" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600">CAMPUS / INSTITUTION</text>
    <text x="24" y="200" fill="#A1A1AA" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="500">${cleanCollege}</text>

    <!-- Pass ID Badge -->
    <rect x="330" y="24" width="126" height="34" rx="6" fill="rgba(66, 133, 244, 0.12)" stroke="rgba(66, 133, 244, 0.3)" stroke-width="1"/>
    <text x="393" y="46" text-anchor="middle" fill="#4285F4" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600">${cleanPassId}</text>
  </g>

  <!-- Barcode / Telemetry Simulation -->
  <g transform="translate(60, 720)">
    <line x1="0" y1="0" x2="480" y2="0" stroke="#27272A" stroke-width="1"/>
    <text x="0" y="30" fill="#71717A" font-family="'JetBrains Mono', monospace" font-size="11">SECURITY TOKEN:</text>
    <text x="120" y="30" fill="#A1A1AA" font-family="'JetBrains Mono', monospace" font-size="11">TK26-AUTH-SEC-8902-VALID</text>

    <!-- Decorative Barcode Lines -->
    <g transform="translate(0, 48)">
      <rect x="0" y="0" width="3" height="42" fill="#F4F4F5"/>
      <rect x="6" y="0" width="8" height="42" fill="#F4F4F5"/>
      <rect x="18" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="26" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="32" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="42" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="50" y="0" width="12" height="42" fill="#F4F4F5"/>
      <rect x="66" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="72" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="82" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="90" y="0" width="10" height="42" fill="#F4F4F5"/>
      <rect x="104" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="110" y="0" width="8" height="42" fill="#F4F4F5"/>
      <rect x="122" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="130" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="140" y="0" width="14" height="42" fill="#F4F4F5"/>
      <rect x="158" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="166" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="172" y="0" width="8" height="42" fill="#F4F4F5"/>
      <rect x="184" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="192" y="0" width="12" height="42" fill="#F4F4F5"/>
      <rect x="208" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="218" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="224" y="0" width="8" height="42" fill="#F4F4F5"/>
      <rect x="236" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="244" y="0" width="10" height="42" fill="#F4F4F5"/>
      <rect x="258" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="264" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="274" y="0" width="14" height="42" fill="#F4F4F5"/>
      <rect x="292" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="300" y="0" width="8" height="42" fill="#F4F4F5"/>
      <rect x="312" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="318" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="328" y="0" width="12" height="42" fill="#F4F4F5"/>
      <rect x="344" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="352" y="0" width="8" height="42" fill="#F4F4F5"/>
      <rect x="364" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="370" y="0" width="10" height="42" fill="#F4F4F5"/>
      <rect x="384" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="392" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="402" y="0" width="12" height="42" fill="#F4F4F5"/>
      <rect x="418" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="426" y="0" width="2" height="42" fill="#F4F4F5"/>
      <rect x="432" y="0" width="8" height="42" fill="#F4F4F5"/>
      <rect x="444" y="0" width="4" height="42" fill="#F4F4F5"/>
      <rect x="452" y="0" width="10" height="42" fill="#F4F4F5"/>
      <rect x="466" y="0" width="6" height="42" fill="#F4F4F5"/>
      <rect x="476" y="0" width="4" height="42" fill="#F4F4F5"/>
    </g>
  </g>

  <!-- Footer Disclaimer -->
  <text x="300" y="860" text-anchor="middle" fill="#71717A" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Present this digital or printed badge at the ITER Main Auditorium registration desk.</text>
  <text x="300" y="880" text-anchor="middle" fill="#52525B" font-family="'JetBrains Mono', monospace" font-size="10">GDG SOA ITER CHAPTER &bull; OFFICIAL EVENT ASSET</text>
</svg>`;

  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const fileName = `TeknoKrraft_2026_Pass_${cleanName.replace(/[^a-zA-Z0-9]/g, '_')}.svg`;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
