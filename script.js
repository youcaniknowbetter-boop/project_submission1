// Earth First - JavaScript (functions, events, if/else, arrays, loops)

// 1. Show / hide extra text on a threat card
function toggleCard(button) {
  var more = button.nextElementSibling;       // the paragraph right after the button
  more.classList.toggle("open");
  if (more.classList.contains("open")) {
    button.innerHTML = "Show less";
  } else {
    button.innerHTML = "Read more";
  }
}

// 2. Collective action slider
function updateSlider() {
  var value = Number(document.getElementById("slider").value);
  var title = "";
  var text = "";

  if (value < 25) {
    title = "Business as usual: about 3°C or more by 2100";
    text = "Few people act. Heat waves, water stress and crop failures grow. Many ecosystems cannot adapt.";
  } else if (value < 50) {
    title = "Slow progress: about 2.5°C";
    text = "Some countries and companies change, but not fast enough. Damage is serious and expensive.";
  } else if (value < 75) {
    title = "Strong effort: about 2°C";
    text = "Clean energy spreads quickly and forests recover. Risks stay, but they are manageable.";
  } else {
    title = "Whole world together: about 1.5°C";
    text = "Almost everyone cuts waste and emissions. Nature heals, air gets cleaner and the future stays open.";
  }

  document.getElementById("percent").innerHTML = value + "%";
  document.getElementById("barFill").style.width = value + "%";
  document.getElementById("result").innerHTML = title;
  document.getElementById("resultText").innerHTML = text;
}

// 3. Civilization types (an array of objects)
var types = [
  {
    title: "Type -1: Mastering Our Own Size",
    scale: "Scale: objects the size of us (metres)",
    text: "This is the first step inward: building, mining and designing things we can see and hold. For the environment it means making things that last, can be repaired, use less energy, and are sorted and reused instead of thrown away. Humanity has worked at this level for thousands of years, but we still waste most of what we dig out of the ground.",
    fact: "Fact: a repaired phone, a well-insulated house or a reused bottle all work at this level."
  },
  {
    title: "Type -2: Mastering Life (Genes and Microbes)",
    scale: "Scale: cells and genes (micrometres)",
    text: "Here we work with microbiology. Bacteria that eat oil after a spill, algae that absorb carbon dioxide, microbes that feed crops with nitrogen so less chemical fertilizer is needed, and plants edited to survive drought. Instead of building a bigger machine, we use living cells as tiny cleaners and builders.",
    fact: "Fact: in 2016 Japanese scientists found a bacterium, Ideonella sakaiensis, that can break down PET plastic."
  },
  {
    title: "Type -3: Mastering Molecules",
    scale: "Scale: molecules (nanometres)",
    text: "At this level we design materials and enzymes molecule by molecule. Enzymes can cut plastic back into its raw ingredients so it can be made again, nano filters can clean dirty water, and special materials can capture carbon dioxide from the air. Pollution is just molecules in the wrong place, and here we learn to move them.",
    fact: "Fact: in 2020 scientists reported an engineered enzyme that broke down most of a PET plastic sample into its building blocks in about 10 hours."
  }
];

function showType(i) {
  document.getElementById("typeTitle").innerHTML = types[i].title;
  document.getElementById("typeScale").innerHTML = types[i].scale;
  document.getElementById("typeText").innerHTML = types[i].text;
  document.getElementById("typeFact").innerHTML = types[i].fact;

  // highlight the chosen tab
  for (var j = 0; j < types.length; j++) {
    document.getElementById("tab" + j).classList.remove("active");
  }
  document.getElementById("tab" + i).classList.add("active");
}

// 4. Pledge checklist
function updatePledges() {
  var boxes = document.getElementsByClassName("pledge");
  var count = 0;
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].checked) {
      count++;
    }
  }
  var percent = (count / boxes.length) * 100;
  document.getElementById("pledgeFill").style.width = percent + "%";

  var message = "";
  if (count == 0) {
    message = "Tick one action to begin.";
  } else if (count < boxes.length) {
    message = "You picked " + count + " of " + boxes.length + " actions. Every small step counts.";
  } else {
    message = "All " + boxes.length + " actions! You are acting like a Type -3 citizen.";
  }
  document.getElementById("pledgeText").innerHTML = message;
}

// 5. Run when the page opens
document.getElementById("year").innerHTML = new Date().getFullYear();
updateSlider();
showType(0);
updatePledges();
