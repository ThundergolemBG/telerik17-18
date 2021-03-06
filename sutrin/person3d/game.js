// Creating variables
var canvas = document.getElementsByTagName('canvas')[0];
var geometry = new THREE.BoxGeometry( 2, 3, 1.5 );
var material = new THREE.MeshPhongMaterial({color: 'red'});
var wmaterial = new THREE.MeshPhongMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var head_geometry = new THREE.BoxGeometry(1, 1, 1);
var head = new THREE.Mesh( head_geometry, material );
head.position.set(0, 2, 0);
scene.add( head );

var arm_geometry = new THREE.BoxGeometry(0.5, 3.5, 0.75);
var left_arm = new THREE.Mesh( arm_geometry, material );
var right_arm = new THREE.Mesh( arm_geometry, material );
left_arm.position.set(1.25, -0.5, 0);
right_arm.position.set(-1.25, -0.5, 0);
scene.add(left_arm);
scene.add(right_arm);

var leg_geometry = new THREE.BoxGeometry(0.8, 4, 1);
var left_leg = new THREE.Mesh( leg_geometry, material );
var right_leg = new THREE.Mesh( leg_geometry, material );
left_leg.position.set(0.6, -3.5, 0);
right_leg.position.set(-0.6, -3.5, 0);
scene.add( left_leg )
scene.add( right_leg )

camera.position.set(10*2, 8*2, 16*2);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var wall_geometry = new THREE.BoxGeometry(10, 8, 1);
var wall1 = new THREE.Mesh( wall_geometry, wmaterial );
var wall2 = new THREE.Mesh( wall_geometry, wmaterial );
wall1.position.set(0, -1.5, -5);
wall2.position.set(-5, -1.5, 0);
wall2.rotation.y = Math.PI/2;
scene.add(wall1);
scene.add(wall2);

var light = new THREE.PointLight( );
var light2 = new THREE.PointLight( );
var light3 = new THREE.PointLight( ); 
light.position.set(-100,100,100);
light2.position.set(100, 100, -50);
light3.position.set(0, -100, 50);
scene.add( light );
scene.add( light2 );
scene.add( light3 );

parts = [cube, head, left_arm, right_arm, left_leg, right_leg];
var alpha = Math.PI/2;
var cx=0, cy=0 , cz=0, dy=0;

//let asd = 0;
function update() {
    //asd += 0.02;
    //light.position.x = Math.cos(asd) * 70;
    //light.position.z = Math.sin(asd) * 70;
    cy += dy;
    if (cy < 0) cy=0;
    dy -= 0.01;
    if (isKeyPressed[87]) {
        cz += 0.05*Math.sin(Math.PI/2-alpha);
        cx += 0.05*Math.cos(Math.PI/2-alpha);
    }
    if (isKeyPressed[83]) {
        cz += 0.05*Math.sin(-Math.PI/2-alpha);
        cx += 0.05*Math.cos(-Math.PI/2-alpha);
    }
    //if (isKeyPressed[65]) alpha += 0.05;
    //if (isKeyPressed[68]) alpha -= 0.05;
    for (let i=0; i<parts.length; ++i){
        parts[i].rotation.y = alpha;
    }
    cube.position.set(cx, cy, cz);
    head.position.set(cx, cy+2, cz);
    left_arm.position.set(cx + Math.cos(-alpha)*1.25, cy-0.5, cz + Math.sin(-alpha)*1.25)
    right_arm.position.set(cx + Math.cos(Math.PI-alpha)*1.25, cy-0.5, cz + Math.sin(Math.PI-alpha)*1.25);
    left_leg.position.set(cx + Math.cos(-alpha)*0.6, cy-3.5, cz + Math.sin(-alpha)*0.6);
    right_leg.position.set(cx + Math.cos(Math.PI-alpha)*0.6, cy-3.5, cz + Math.sin(Math.PI-alpha)*0.6)
}

function keyup(key) {
    if (key == 27) document.exitPointerLock();
	if (key == 32 && cy<=0) dy=0.2;
	console.log("Pressed", key);
}
function mouseMove(e){
    //console.log(e.movementX, e.movementY);
    alpha -= e.movementX*0.01;
}
function mouseup() {
    if (document.pointerLockElement !== canvas){
        canvas.requestPointerLock();
    }
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
