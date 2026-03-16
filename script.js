document.addEventListener('DOMContentLoaded', () => {
    const dropBtn = document.getElementById('dropBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    let dodgeCount = 0;
    const maxDodges = 4;

    // Button dodging logic
    dropBtn.addEventListener('mouseover', (e) => {
        if (dodgeCount < maxDodges) {
            // Calculate random position within constraints
            const x = (Math.random() - 0.5) * 350; 
            const y = (Math.random() - 0.5) * 150; 
            
            dropBtn.style.transform = `translate(${x}px, ${y}px) scale(0.95)`;
            
            dodgeCount++;
            
            // Change button text slightly to tease
            const teases = [
                "Nice try! 💅",
                "Wait, do you actually want to?",
                "Are you sure you want to drop him?",
                "Okay but what about the websites he made?"
            ];
            dropBtn.innerText = teases[dodgeCount - 1] || dropBtn.innerText;
        } else {
            // Return to center
            dropBtn.style.transform = `translate(0px, 0px) scale(1)`;
            dropBtn.innerText = "Fine. Sign it. 🙄";
        }
    });

    // Reset button position
    document.querySelector('.button-container').addEventListener('mouseleave', () => {
        if (dodgeCount < maxDodges) {
            dropBtn.style.transform = `translate(0px, 0px) scale(1)`;
            dropBtn.innerText = "Sign Petition to Drop Shashwat";
            dodgeCount = 0;
        }
    });

    // Opening the modal
    dropBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('hidden');
        setTimeout(() => {
            modalOverlay.classList.add('visible');
        }, 10);
    });

    // Handle "Yes" (Forgive) button
    yesBtn.addEventListener('click', () => {
        yesBtn.innerText = "BESTIES AGAIN 🌻💛";
        yesBtn.style.background = "#10b981"; // success green
        yesBtn.style.color = "white";
        yesBtn.style.boxShadow = "0 0 25px rgba(16, 185, 129, 0.6)";
        noBtn.style.opacity = "0.3";
        noBtn.style.pointerEvents = "none";
        
        setTimeout(() => {
            modalOverlay.classList.remove('visible');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                // Change hero to celebration
                document.querySelector('.glitch').innerText = "I'M SORRY LADDU 💛";
                document.querySelector('.glitch').style.color = "#facc15";
                document.querySelector('.subtitle').innerText = "Thank you for not actually replacing me with a tall, smart, ambivert.";
                document.querySelector('.action-plan').style.display = 'none';
                document.querySelector('.dossier').style.display = 'none';
                document.querySelector('.requirements').style.display = 'none';
            }, 400);
        }, 2000);
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
            noBtn.innerText = "No, stay gone";
        }, 1500);
    });
});
