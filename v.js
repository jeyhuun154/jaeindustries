// v.js — Owner Verification Display
// Only renders on /verification

(function () {
    'use strict';

    const path = window.location.pathname.replace(/\/+$/, '');
    if (path !== '/verification') return;

    const style = document.createElement('style');
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background: #0d0d0d;
            min-height: 100vh;
            display: flex; align-items: center; justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
            color: #fff;
        }

        body::before {
            content: '';
            position: fixed; inset: 0; z-index: -1;
            background:
                radial-gradient(ellipse 80% 60% at 20% 90%, rgba(88,86,214,0.4) 0%, transparent 60%),
                radial-gradient(ellipse 60% 50% at 80% 10%, rgba(41,151,255,0.3) 0%, transparent 55%),
                linear-gradient(160deg, #0d0d12 0%, #0a0a18 40%, #0c0818 100%);
        }

        #vfy-card {
            width: 90%; max-width: 400px;
            background: rgba(28,28,32,0.92);
            backdrop-filter: blur(50px) saturate(200%);
            -webkit-backdrop-filter: blur(50px) saturate(200%);
            border: 1px solid rgba(255,255,255,0.13);
            border-radius: 20px;
            box-shadow: 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
            padding: 36px 32px 32px;
            display: flex; flex-direction: column; gap: 20px;
            animation: fadeUp 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px) scale(0.97); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .vfy-eyebrow {
            font-size: 11px; font-weight: 500;
            color: rgba(255,255,255,0.35); letter-spacing: 0.3px;
        }

        .vfy-title {
            font-size: 22px; font-weight: 600;
            color: #fff; letter-spacing: -0.4px;
            margin-top: 4px;
        }

        .vfy-divider {
            border: none; border-top: 1px solid rgba(255,255,255,0.08);
        }

        .vfy-row {
            display: flex; flex-direction: column; gap: 4px;
        }
        .vfy-label {
            font-size: 11px; font-weight: 500;
            color: rgba(255,255,255,0.35); letter-spacing: 0.3px;
        }
        .vfy-value {
            font-size: 15px; color: rgba(255,255,255,0.9);
        }
        .vfy-value.vfy-ticket {
            font-size: 28px; font-weight: 700;
            color: #2997ff; letter-spacing: -0.5px;
        }
        .vfy-value.vfy-mono {
            font-family: "SF Mono", "Courier New", monospace;
            font-size: 13px; color: rgba(255,255,255,0.6);
        }

        .vfy-badge {
            display: inline-flex; align-items: center; gap: 6px;
            background: rgba(48,209,88,0.1);
            border: 1px solid rgba(48,209,88,0.25);
            border-radius: 8px;
            padding: 6px 11px;
            font-size: 12px; font-weight: 500; color: #30d158;
            width: fit-content;
        }
        .vfy-badge-dot {
            width: 6px; height: 6px; border-radius: 50%;
            background: #30d158;
            box-shadow: 0 0 6px #30d158;
            animation: vfyBlink 2s infinite;
        }
        @keyframes vfyBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
    `;
    document.head.appendChild(style);

    const card = document.createElement('div');
    card.id = 'vfy-card';
    card.innerHTML = `
        <div>
            <div class="vfy-eyebrow">jae-industries.vercel.app · /verification</div>
            <div class="vfy-title">Owner Verification</div>
        </div>

        <hr class="vfy-divider">

        <div class="vfy-row">
            <span class="vfy-label">TICKET NUMBER</span>
            <span class="vfy-value vfy-ticket">1572630</span>
        </div>

        <hr class="vfy-divider">

        <div class="vfy-row">
            <span class="vfy-label">OWNER</span>
            <span class="vfy-value">Ceyhun Karaarslan</span>
        </div>

        <div class="vfy-row">
            <span class="vfy-label">EMAIL</span>
            <span class="vfy-value vfy-mono">ckceyhun2@gmail.com</span>
            <span class="vfy-value vfy-mono">ceyhunkaraarslan40@gmail.com</span>
        </div>

        <div class="vfy-row">
            <span class="vfy-label">DOMAIN</span>
            <span class="vfy-value vfy-mono">jae-industries.vercel.app</span>
        </div>

        <hr class="vfy-divider">

        <div class="vfy-badge">
            <div class="vfy-badge-dot"></div>
            Verified Owner
        </div>
    `;

    document.body.appendChild(card);
})();
