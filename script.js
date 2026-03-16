document.addEventListener('DOMContentLoaded', () => {
    const dropBtn = document.getElementById('dropBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    let dodgeCount = 0;
    const maxDodges = 3;

    // Button dodging logic
    dropBtn.addEventListener('mouseover', (e) => {
        if (dodgeCount < maxDodges) {
            // Calculate random position within constraints
            const x = (Math.random() - 0.5) * 300; // -150px to 150px
            const y = (Math.random() - 0.5) * 150; // -75px to 75px
            
            dropBtn.style.transform = `translate(${x}px, ${y}px) scale(0.95)`;
            
            dodgeCount++;
            
            // Change button text slightly to tease
            const teases = [
                "Nice try! 💅",
                "Almost got it! 🤭",
                "Wait, do you actually want to? 🥺"
            ];
            dropBtn.innerText = teases[dodgeCount - 1] || dropBtn.innerText;
        } else {
            // After 3 dodges, return to center and let them click
            dropBtn.style.transform = `translate(0px, 0px) scale(1)`;
            dropBtn.innerText = "Fine, Sign Petition 🙄";
        }
    });

    // Reset button position if mouse leaves container entirely
    document.querySelector('.button-container').addEventListener('mouseleave', () => {
        if (dodgeCount < maxDodges) {
            dropBtn.style.transform = `translate(0px, 0px) scale(1)`;
            dropBtn.innerText = "Sign Petition to Drop Shashwat";
            dodgeCount = 0;
        }
    });

    // Opening the modal
    dropBtn.addEventListener('click', () => {
        // Only open if it stopped dodging or they managed to click it
        modalOverlay.classList.remove('hidden');
        // Small delay to allow display flow to apply before opacity fades in
        setTimeout(() => {
            modalOverlay.classList.add('visible');
        }, 10);
    });

    // Handle "Yes" (Forgive) button
    yesBtn.addEventListener('click', () => {
        yesBtn.innerText = "YAY! BESTIES AGAIN 🎉";
        yesBtn.style.background = "#10b981"; // success green
        yesBtn.style.boxShadow = "0 0 25px rgba(16, 185, 129, 0.6)";
        noBtn.style.opacity = "0.3";
        noBtn.style.pointerEvents = "none";
        
        setTimeout(() => {
            modalOverlay.classList.remove('visible');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                // Change hero to celebration
                document.querySelector('.glitch').innerText = "BESTIES RESTORED 💖";
                document.querySelector('.glitch').style.color = "#ec4899";
                document.querySelector('.subtitle').innerText = "The gag is over. Shashwat is really sorry.";
                document.querySelector('.action-plan').style.display = 'none';
                document.querySelector('.dossier').style.display = 'none';
            }, 400);
        }, 1500);
    });

    // Handle "No" (Still mad) button playfully
    noBtn.addEventListener('mouseover', () => {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    noBtn.addEventListener('click', () => {
        noBtn.innerText = "Too bad, you gotta hit Yes! 😆";
        noBtn.style.transform = `translate(0, 0)`;
        setTimeout(() => {
            noBtn.innerText = "No (I'm still mad)";
        }, 1500);
    });
});
