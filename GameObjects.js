AFRAME.registerComponent("obstacle", {
  init: function () {
    //starting x position
    posX = 20;
    //starting z-position
    posZ = 10;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var obstacles = document.createElement("a-entity");
      var obstacles2 = document.createElement("a-entity");
      var obstacles3 = document.createElement("a-entity");
      var obstacles4 = document.createElement("a-entity");


      //set x, y and z position
      posX = posX
      posY = -2;
      posZ = posZ - 15;

      //scale 
      var scale = { x: 0.04, y: 0.04, z: 0.04 };

      //set the id
      obstacles.setAttribute("id", "obstacles" + i);
      obstacles2.setAttribute("id", "obstacles" + i);
      obstacles3.setAttribute("id", "obstacles3" + i);
      obstacles4.setAttribute("id", "obstacles4" + i);

      //set the position
      obstacles.setAttribute("position", { x: posX, y: -2, z: -35 });
      obstacles2.setAttribute("position", { x: posX, y: -2, z: 85 });
      obstacles3.setAttribute("position", { x: -30, y: -2, z: posZ });
      obstacles4.setAttribute("position", { x: 50, y: -2, z: posZ });

      //set the scale
      obstacles.setAttribute("scale", scale);
      obstacles2.setAttribute("scale", scale);
      obstacles3.setAttribute("scale", scale);
      obstacles4.setAttribute("scale", scale);

      //set the model
      obstacles.setAttribute(
        "gltf-model",
        "./s"
      );

      obstacles2.setAttribute(
        "gltf-model",
        "./studded_round_obstacle/scene.gltf"
      );

      obstacles3.setAttribute(
        "gltf-model",
        "./studded_round_obstacle/scene.gltf"
      );

      obstacles4.setAttribute(
        "gltf-model",
        "../studded_round_obstacle/scene.gltf"
      );

      //set the rotation
      obstacles3.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      obstacles4.setAttribute("rotation", { x: 0, y: 0, z: 0 });

      //set the physics body
      obstacles.setAttribute("static-body", {});
      obstacles2.setAttribute("static-body", {});
      obstacles3.setAttribute("static-body", {});
      obstacles4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(obstacles);
      sceneEl.appendChild(obstacles2);
      sceneEl.appendChild(obstacles3);
      sceneEl.appendChild(obstacles4);

    }
  },
});