const color = document.querySelector('input');
let screen = document.querySelector('canvas');
let defaultColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let ctx = screen.getContext('2d');

color.onchange = () => defaultColor = color.value;

// Eventos de Mouse
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
window.addEventListener('mouseup', mouseUpEvent);

// Eventos de Touch (Mobile)
screen.addEventListener('touchstart', touchStartEvent, { passive: false });
screen.addEventListener('touchmove', touchMoveEvent, { passive: false });
screen.addEventListener('touchend', mouseUpEvent);

function getPointerPosition(e) {
    // Verifica se é touch ou mouse e retorna a posição correta
    const rect = screen.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
        return {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
        };
    } else {
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
}

function mouseDownEvent(e) {
    canDraw = true;
    const pos = getPointerPosition(e);
    mouseX = pos.x;
    mouseY = pos.y;
}

function mouseMoveEvent(e) {
    if (canDraw) {
        const pos = getPointerPosition(e);
        draw(pos.x, pos.y);
    }
}

function touchStartEvent(e) {
    e.preventDefault(); // Impede o scroll da tela ao desenhar
    mouseDownEvent(e);
}

function touchMoveEvent(e) {
    e.preventDefault(); // Impede o scroll da tela ao desenhar
    const pos = getPointerPosition(e);
    if (canDraw) {
        draw(pos.x, pos.y);
    }
}

function mouseUpEvent() {
    canDraw = false;
}

function draw(pointX, pointY) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round"; // Deixa o traço mais suave
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.strokeStyle = defaultColor;
    ctx.stroke();
    ctx.closePath();

    mouseX = pointX;
    mouseY = pointY;
}

function clearBoard() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, screen.width, screen.height);
}
