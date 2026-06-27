function showVerificationPopup() {
    const overlay = document.createElement('div');
    overlay.id = 'verification-overlay';
    overlay.style.cssText = `
        position:fixed; inset:0; background:rgba(0,0,0,0.8);
        backdrop-filter:blur(10px); display:flex; justify-content:center;
        align-items:center; z-index:99999;
    `;

    overlay.innerHTML = `
        <div style="
            background:#0a0a0c; border:1px solid rgba(255,255,255,0.1);
            border-radius:16px; width:90%; max-width:500px; padding:3rem;
            position:relative; box-shadow:0 0 50px rgba(0,0,0,0.6);
        ">
            <button id="verification-close-btn" style="
                position:absolute; top:1.5rem; right:1.5rem;
                background:none; border:none; color:#ff003c;
                font-size:2rem; cursor:pointer; line-height:1;
                transition:transform 0.3s ease;
            " onmouseover="this.style.transform='scale(1.2) rotate(90deg)'"
               onmouseout="this.style.transform='scale(1) rotate(0deg)'">×</button>

            <div style="font-size:0.75rem; color:#666; letter-spacing:2px; text-transform:uppercase; margin-bottom:1rem;">
                DOMAIN VERIFICATION
            </div>
            <div style="font-size:2rem; font-family:'Segoe UI',sans-serif; font-weight:700; color:#fff; margin-bottom:2rem;">
                Jae Industries
            </div>

            <hr style="border:none; border-top:1px solid rgba(255,255,255,0.1); margin-bottom:2rem;">

            <div style="font-size:0.75rem; color:#666; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">OWNER</div>
            <div style="font-size:1rem; color:#aaa; margin-bottom:1.5rem;">ckceyhun2@gmail.com</div>

            <div style="font-size:0.75rem; color:#666; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">DOMAIN</div>
            <div style="font-size:1rem; color:#aaa; margin-bottom:1.5rem;">jae-industries.vercel.app</div>

            <div style="font-size:0.75rem; color:#666; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">VERIFICATION TOKEN</div>
            <div style="font-size:1rem; color:#aaa; margin-bottom:2rem; font-family:'Courier New',monospace;">JAE-2025-XXXXXX</div>

            <hr style="border:none; border-top:1px solid rgba(255,255,255,0.1); margin-bottom:1.5rem;">

            <div style="display:flex; align-items:center; gap:8px; font-size:0.75rem; color:#666; letter-spacing:1px; text-transform:uppercase;">
                <div style="width:8px; height:8px; border-radius:50%; background:#0f0; box-shadow:0 0 10px #0f0; flex-shrink:0;"></div>
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
