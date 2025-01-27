// Example data structure
const tvShows = {
    "Simpsons Classic": {
      seasons: {
        2: { episodes: 22, excluded: [] },
        3: { episodes: 24, excluded: [] },
        4: { episodes: 22, excluded: [] },
        5: { episodes: 22, excluded: [] },
        6: { episodes: 25, excluded: [] },
        7: { episodes: 25, excluded: [] },
        8: { episodes: 25, excluded: [] },
        9: { episodes: 25, excluded: [] },
        10: { episodes: 23, excluded: [] },
        11: { episodes: 22, excluded: [] },
        12: { episodes: 21, excluded: [] },
        13: { episodes: 22, excluded: [] },
        14: { episodes: 22, excluded: [] },
        15: { episodes: 22, excluded: [] },
        16: { episodes: 21, excluded: [] },
        17: { episodes: 22, excluded: [] },
        18: { episodes: 22, excluded: [] },
        19: { episodes: 20, excluded: [] },
        20: { episodes: 21, excluded: [] },
        21: { episodes: 23, excluded: [] },
        22: { episodes: 22, excluded: [] },
        23: { episodes: 22, excluded: [] },
        24: { episodes: 22, excluded: [] }
      },
      color: "#FFD700", // Custom background color
      textColor: "#000000", // Custom text color
      icon: "🟡" // Emoji icon
    },
    "Simpsons": {
      seasons: {
        1: { episodes: 13, excluded: [] },
        2: { episodes: 22, excluded: [] },
        3: { episodes: 24, excluded: [] },
        4: { episodes: 22, excluded: [] },
        5: { episodes: 22, excluded: [] },
        6: { episodes: 25, excluded: [] },
        7: { episodes: 25, excluded: [] },
        8: { episodes: 25, excluded: [] },
        9: { episodes: 25, excluded: [] },
        10: { episodes: 23, excluded: [] },
        11: { episodes: 22, excluded: [] },
        12: { episodes: 21, excluded: [] },
        13: { episodes: 22, excluded: [] },
        14: { episodes: 22, excluded: [] },
        15: { episodes: 22, excluded: [] },
        16: { episodes: 21, excluded: [] },
        17: { episodes: 22, excluded: [] },
        18: { episodes: 22, excluded: [] },
        19: { episodes: 20, excluded: [] },
        20: { episodes: 21, excluded: [] },
        21: { episodes: 23, excluded: [] },
        22: { episodes: 22, excluded: [] },
        23: { episodes: 22, excluded: [] },
        24: { episodes: 22, excluded: [] },
        25: { episodes: 22, excluded: [] },
        26: { episodes: 22, excluded: [] },
        27: { episodes: 22, excluded: [] },
        28: { episodes: 22, excluded: [] },
        29: { episodes: 21, excluded: [] },
        30: { episodes: 23, excluded: [] },
        31: { episodes: 22, excluded: [] },
        32: { episodes: 22, excluded: [] },
        33: { episodes: 22, excluded: [] },
        34: { episodes: 22, excluded: [] },
        35: { episodes: 18, excluded: [] }
      },
      color: "#FFD700", // Custom background color
      textColor: "#000000", // Custom text color
      icon: "🟡" // Emoji icon
    },
    "Big bang theory": {
      seasons: {
        1: { episodes: 17, excluded: [] },
        2: { episodes: 23, excluded: [] },
        3: { episodes: 23, excluded: [] },
        4: { episodes: 24, excluded: [] },
        5: { episodes: 24, excluded: [] },
        6: { episodes: 24, excluded: [] },
        7: { episodes: 24, excluded: [] },
        8: { episodes: 24, excluded: [] },
        9: { episodes: 24, excluded: [] },
        10: { episodes: 24, excluded: [] },
        11: { episodes: 24, excluded: [] },
        12: { episodes: 24, excluded: [] }
      },
      color: "#FF6347", // Custom background color
      textColor: "#FFFFFF", // Custom text color
      icon: "🟠"
    },
    "Futurama": {
      seasons: {
        1: { episodes: 13, excluded: [] },
        2: { episodes: 19, excluded: [] },
        3: { episodes: 22, excluded: [] },
        4: { episodes: 18, excluded: [] },
        5: { episodes: 16, excluded: [] }
      },
      color: "#E05D57", // Custom background color
      textColor: "#FFFFFF", // Custom text color
      icon: "🔴"
    },
    "South Park": {
      seasons: {
        1: { episodes: 13, excluded: [] },
        2: { episodes: 18, excluded: [] },
        3: { episodes: 17, excluded: [] },
        4: { episodes: 17, excluded: [] },
        5: { episodes: 14, excluded: [] },
        6: { episodes: 17, excluded: [] },
        7: { episodes: 15, excluded: [] },
        8: { episodes: 14, excluded: [] },
        9: { episodes: 14, excluded: [] },
        10: { episodes: 14, excluded: [] },
        11: { episodes: 14, excluded: [] },
        12: { episodes: 14, excluded: [] },
        13: { episodes: 14, excluded: [] },
        14: { episodes: 14, excluded: [] },
        15: { episodes: 14, excluded: [] },
        16: { episodes: 14, excluded: [] },
        17: { episodes: 10, excluded: [] },
        18: { episodes: 10, excluded: [] },
        19: { episodes: 10, excluded: [] },
        20: { episodes: 10, excluded: [] },
        21: { episodes: 10, excluded: [] },
        22: { episodes: 10, excluded: [] },
        23: { episodes: 10, excluded: [] },
        24: { episodes: 4, excluded: [] },
        25: { episodes: 8, excluded: [] },
        26: { episodes: 9, excluded: [] }
      },
      color: "#32CD32", // Custom background color
      textColor: "#FFFFFF", // Custom text color
      icon: "🟢"
    }
  };
  
  // Get reference to the buttons container and result display
  const buttonsContainer = document.getElementById("buttons-container");
  const resultElement = document.getElementById("result");
  
  // Function to get a random episode for a specific show
  function getRandomEpisode(showName) {
    const { seasons } = tvShows[showName];
    const seasonKeys = Object.keys(seasons);
    const randomSeason = seasonKeys[Math.floor(Math.random() * seasonKeys.length)];
    const { episodes, excluded } = seasons[randomSeason];
  
    // Filter available episodes
    const availableEpisodes = Array.from({ length: episodes }, (_, i) => i + 1).filter(
      (ep) => !excluded.includes(ep)
    );
  
    if (availableEpisodes.length === 0) {
      return `All episodes of Season ${randomSeason} of '${showName}' are excluded.`;
    }
  
    const randomEpisode = availableEpisodes[Math.floor(Math.random() * availableEpisodes.length)];
    return `Random pick for '${showName}': Season ${randomSeason}, Episode ${randomEpisode}`;
  }
  
  // Function to pick a random show
  function getRandomShow() {
    const showNames = Object.keys(tvShows);
    const randomShow = showNames[Math.floor(Math.random() * showNames.length)];
    return getRandomEpisode(randomShow);
  }
  
  // Dynamically create buttons for each show
  Object.keys(tvShows).forEach((showName) => {
    const { color, textColor, icon } = tvShows[showName];
  
    // Create a button for the show
    const button = document.createElement("button");
    button.style.backgroundColor = color; // Apply custom background color
    button.style.color = textColor; // Apply custom text color
    button.innerHTML = `<span class="icon">${icon}</span> ${showName}`; // Add icon and name
  
    // Add click event to the button
    button.addEventListener("click", () => {
      const result = getRandomEpisode(showName);
      resultElement.textContent = result;
    });
  
    // Append the button to the container
    buttonsContainer.appendChild(button);
  });
  
  // Event listener for random show button
  document.getElementById("random-show").addEventListener("click", () => {
    const result = getRandomShow();
    resultElement.textContent = result;
  });
  