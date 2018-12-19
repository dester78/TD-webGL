function render() {

	let angle = updateAngle();
	affectSeasons(angle);

	renderer.render( scene, camera );
}


function updateAngle() {
	const radAngle = Math.atan2(camera.position.z, camera.position.x);
	const degAngle = radAngle * 180 / Math.PI;
	return degAngle;
}


function affectSeasons(angle) {
	console.log(angle);
	if (angle >= 0 && angle <= 90) {
		affectSummer(angle);
	} else if (angle > 90 && angle < 180) {
		affectAutumn(angle);
	} else if (angle < -90) {
		affectWinter(angle);
	} else {
		affectSpring(angle);
	}
}

function affectSummer(angle) {
	let intensity = 45 - Math.abs(angle - 45);
	console.log('summer : ' + intensity);
}

function affectAutumn(angle) {
	angle -= 90
	let intensity = 45 - Math.abs(angle - 45);
	console.log('autumn : ' + intensity);
}

function affectWinter(angle) {
	angle += 180;
	let intensity = 45 - Math.abs(angle - 45);
	console.log('winter : ' + intensity);
}

function affectSpring(angle) {
	angle += 90;
	let intensity = 45 - Math.abs(angle - 45);
	console.log('spring : ' + intensity);
}

