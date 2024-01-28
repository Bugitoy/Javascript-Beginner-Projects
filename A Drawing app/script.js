  // Get the canvas and its context
  const canvas = document.getElementById("drawingCanvas");
  const ctx = canvas.getContext("2d");

  // Set default drawing properties
  let isDrawing = false;
  let penColor = "#000";
  let penSize = 5;

  // Event listeners for mouse actions
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  // Event listener for touch actions (for mobile devices)
  canvas.addEventListener("touchstart", startDrawing);
  canvas.addEventListener("touchmove", draw);
  canvas.addEventListener("touchend", stopDrawing);

  // Function to start drawing
  function startDrawing(e) {
      isDrawing = true;
      draw(e); // Draw a single point to start the path
  }

  // Function to draw on the canvas
  function draw(e) {
      if (!isDrawing) return;

      // Set drawing properties
      ctx.lineWidth = penSize;
      ctx.lineCap = "round";
      ctx.strokeStyle = penColor;

      // Draw line
      ctx.lineTo(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY);
  }

  // Function to stop drawing
  function stopDrawing() {
      isDrawing = false;
      ctx.beginPath(); // Start a new path when drawing stops
  }

  // Function to change pen color
  function changeColor() {
      penColor = document.getElementById("colorPicker").value;
  }

  // Function to change pen size
  function changeSize() {
      penSize = document.getElementById("sizeSlider").value;
  }