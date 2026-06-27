function showVerificationPopup() {
    const overlay = document.createElement('div');
    overlay.id = 'verification-overlay';
    overlay.style.cssText = `
        position:fixed; inset:0; background:rgba(0,0,0,0.85);
        backdrop-filter:blur(14px); display:flex; justify-content:center;
        align-items:center; opacity:1; z-index:99999;
    `;

    overlay.innerHTML = `
        <div style="
            background:#08080c; border:1px solid var(--primary, #00f3ff);
            width:90%; max-width:600px; max-height:82vh;
            padding:2.5rem 2.5rem 2rem; overflow-y:auto;
            border-radius:4px 0 0 4px; position:relative;
            box-shadow:0 0 60px rgba(0,243,255,0.1), 0 30px 80px rgba(0,0,0,0.7);
            transform:translateY(0) scale(1);
            transition:all 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        ">
            <button id="verification-close-btn" style="
                position:absolute; top:1.2rem; right:1.5rem;
                background:none; border:none; color:#ff003c;
                font-size:1.8rem; cursor:pointer; line-height:1;
                transition:transform 0.3s ease;
            " onmouseover="this.style.transform='scale(1.2) rotate(90deg)'"
               onmouseout="this.style.transform='scale(1) rotate(0deg)'">×</button>

            <div style="font-size:0.65rem; color:var(--primary,#00f3ff); letter-spacing:2px; text-transform:uppercase; margin-bottom:0.6rem; opacity:0.7;">
                DOMAIN VERIFICATION
            </div>
            <div style="font-size:1.9rem; font-family:'Segoe UI',sans-serif; font-weight:700; color:#fff; margin-bottom:0.8rem;">
                Jae Industries
            </div>

            <hr style="border:none; border-top:1px solid rgba(255,255,255,0.07); margin:1.2rem 0;">

            <div style="font-size:0.65rem; color:#555; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">OWNER</div>
            <div style="font-size:0.95rem; color:#999; line-height:1.7; margin-bottom:1.2rem;">ckceyhun2@gmail.com</div>

            <div style="font-size:0.65rem; color:#555; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">DOMAIN</div>
            <div style="font-size:0.95rem; color:#999; line-height:1.7; margin-bottom:1.2rem;">jae-industries.vercel.app</div>

            <div style="font-size:0.65rem; color:#555; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">VERIFICATION TOKEN</div>
            <div style="font-size:0.95rem; color:#999; line-height:1.7; margin-bottom:1.2rem; font-family:'Courier New',monospace;">JAE-2025-XXXXXX</div>

            <hr style="border:none; border-top:1px solid rgba(255,255,255,0.07); margin:1.2rem 0;">

            <div style="display:flex; align-items:center; gap:8px; margin-top:1rem; font-size:0.75rem; color:#555; letter-spacing:1px; text-transform:uppercase;">
                <div style="width:7px; height:7px; border-radius:50%; background:#0f0; box-shadow:0 0 8px #0f0; flex-shrink:0;"></div>
                VERIFIED — ${new Date().toUTCString()}
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('verification-close-btn').addEventListener('click', function() {
        document.getElementById('verification-overlay').remove();
        window.history.pushState({}, '', '/');
    });
}

if (window.location.pathname === '/verification') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showVerificationPopup);
    } else {
        showVerificationPopup();
    }
}
