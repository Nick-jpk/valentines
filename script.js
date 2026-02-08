let combo = 0;

function comboAttack() {
  combo++;
  arm.style.animation = `attack 0.3s ease-in-out forwards`;

  // Flash slash
  slash.style.opacity = '1';
  slash.style.animation = `slash 0.3s forwards`;

  setTimeout(() => {
    arm.style.animation = '';
    slash.style.opacity = '0';
    if(combo < 3) comboAttack(); // repeat 3 times
    else combo = 0;
  }, 300);
}

// Trigger combo on double click
document.body.addEventListener('dblclick', comboAttack);
