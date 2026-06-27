// Verification page check
if (window.location.pathname === '/verification') {
    showVerificationPopup();
}

function showVerificationPopup() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position:fixed; inset:0; background:rgba(0,0,0,0.85);
        backdrop-filter:blur(14px); display:flex; justify-content:center;
        align-items:center; z-index:99999;
    `;

    overlay.innerHTML = `
        <div style="
            background:#08080c; border:1px solid rgba(0,243,255,0.3);
            padding:2.5rem; max-width:480px; width:90%; position:relative;
            box-shadow:0 0 60px rgba(0,243,255,0.1);
        ">
            <div style="font-size:0.65rem; color:#00f3ff; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem; opacity:0.7;">
                DOMAIN VERIFICATION
            </div>
            <div style="font-size:1.6rem; font-family:'Segoe UI',sans-serif; font-weight:700; color:#fff; margin-bottom:1.2rem;">
                Jae Industries
            </div>
            <hr style="border:none; border-top:1px solid rgba(255,255,255,0.07); margin-bottom:1.2rem;">
            <div style="font-size:0.75rem; color:#555; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">OWNER</div>
            <div style="font-size:0.95rem; color:#ccc; margin-bottom:1.5rem;">ckceyhun2@gmail.com</div>
            <div style="font-size:0.75rem; color:#555; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">DOMAIN</div>
            <div style="font-size:0.95rem; color:#ccc; margin-bottom:1.5rem;">jae-industries.vercel.app</div>
            <div style="font-size:0.75rem; color:#555; letter-spacing:2px; text-transform:uppercase; margin-bottom:0.5rem;">VERIFIED</div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:2rem;">
                <div style="width:7px; height:7px; border-radius:50%; background:#0f0; box-shadow:0 0 8px #0f0;"></div>
                <span style="font-size:0.85rem; color:#ccc;">${new Date().toUTCString()}</span>
            </div>
            <button onclick="window.history.pushState({},'','/'); this.closest('[style]').parentElement.remove();" style="
                background:transparent; border:1px solid rgba(0,243,255,0.2);
                color:#00f3ff; font-family:'Courier New',monospace; font-size:0.75rem;
                letter-spacing:2px; text-transform:uppercase; padding:10px 20px;
                cursor:pointer; transition:all 0.3s ease; width:100%;
            " onmouseover="this.style.background='rgba(0,243,255,0.06)'"
               onmouseout="this.style.background='transparent'">
                CLOSE
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
}
