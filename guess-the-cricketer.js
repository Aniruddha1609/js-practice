const playerNames = [
  "Virat Kohli", "Steve Smith", "Ben Stokes", "Babar Azam", "MS Dhoni",
  "Rohit Sharma", "Kane Williamson", "Joe Root", "David Warner", "Jasprit Bumrah",
  "Shaheen Afridi", "Mitchell Starc", "Ravindra Jadeja", "Rashid Khan", "Shakib Al Hasan",
  "KL Rahul", "Hardik Pandya", "Faf du Plessis", "Quinton de Kock", "Jos Buttler",
  "Glenn Maxwell", "Mohammad Rizwan", "Pat Cummins", "Tim Southee", "Trent Boult",
  "Aaron Finch", "Yuzvendra Chahal", "Rishabh Pant", "Suryakumar Yadav", "Imam-ul-Haq",
  "Alex Hales", "Bhanuka Rajapaksa", "Andre Russell", "Kieron Pollard", "Sam Curran"
]

const cluesList = [
  ["Indian batsman", "Known as the run machine", "Former Indian captain", "Right-handed batsman", "Plays for RCB in IPL"],
  ["Australian batsman", "Known for unorthodox style", "Former captain", "Right-handed", "Plays for Sydney Sixers"],
  ["England all-rounder", "2019 WC Final Hero", "Left-handed", "Fast bowler", "Plays for CSK"],
  ["Pakistani batsman", "Captain of team", "Right-handed", "Karachi Kings player", "Compared to Virat Kohli"],
  ["Indian wicketkeeper", "Captain Cool", "Right-handed", "CSK player", "Won 3 IPL titles"],
  ["Indian opener", "Hitman", "Multiple double hundreds", "Mumbai Indians", "Captain in 2023 WC"],
  ["New Zealand captain", "Calm leader", "Top-order batsman", "SRH player", "Right-handed"],
  ["England batsman", "Elegant strokeplay", "Test captain", "Right-handed", "Yorkshire player"],
  ["Australian opener", "Aggressive", "Left-handed", "Played for SRH", "Suspended in 2018"],
  ["Indian fast bowler", "Yorker specialist", "Right-arm", "Mumbai Indians", "Known for death bowling"],
  ["Pakistani pacer", "Left-arm", "Tall and fast", "Plays for Lahore Qalandars", "WC 2022 performer"],
  ["Australian pacer", "Left-arm", "Fastest bowler", "Played for MI", "Injury-prone"],
  ["Indian all-rounder", "Left-arm spin", "Left-handed bat", "Great fielder", "Plays for CSK"],
  ["Afghan spinner", "Leg spin", "Played for SRH", "Economical", "Can bat too"],
  ["Bangladesh all-rounder", "Left-handed", "Spin bowler", "Captain", "Played in IPL"],
  ["Indian batsman", "Right-handed", "Wicketkeeper", "Played for LSG", "Stylish strokeplay"],
  ["Indian all-rounder", "Power hitter", "Right-arm medium", "Captain in T20s", "Played for MI"],
  ["South African batsman", "Right-handed", "Former captain", "CSK opener", "Fitness icon"],
  ["South African wicketkeeper", "Left-handed", "Aggressive", "Plays for LSG", "Partnership with Faf"],
  ["England batsman", "Right-handed", "Opener", "RR player", "Hard-hitter"],
  ["Australian all-rounder", "Right-handed", "Off-spinner", "Finisher", "Plays for RCB"],
  ["Pakistani batsman", "Right-handed", "Wicketkeeper", "Top scorer", "Plays with Babar"],
  ["Australian bowler", "Fast bowler", "Test captain", "Right-arm", "Plays for KKR"],
  ["New Zealand bowler", "Right-arm swing", "Experienced", "Death overs", "Plays for RCB"],
  ["New Zealand bowler", "Left-arm swing", "MI bowler", "New ball specialist", "Sharp movement"],
  ["Australian batsman", "Right-handed", "Captain", "Aggressive", "Retired from ODIs"],
  ["Indian spinner", "Leg break", "Takes key wickets", "RR player", "Economical"],
  ["Indian wicketkeeper", "Aggressive", "Left-handed", "Plays for DC", "Recovering from accident"],
  ["Indian batsman", "360-degree", "Right-handed", "Plays for MI", "Known for T20 shots"],
  ["Pakistani opener", "Left-handed", "Consistent", "Plays for Lahore", "ODI specialist"],
  ["England opener", "Right-handed", "Tall", "Aggressive in T20s", "Plays in leagues"],
  ["Sri Lankan batsman", "Left-handed", "Middle order", "Plays in T20 leagues", "Explosive batting"],
  ["West Indian all-rounder", "Power hitter", "Right-arm fast", "KKR player", "T20 match-winner"],
  ["West Indian all-rounder", "Big hitter", "Right-handed", "Played for MI", "T20 veteran"],
  ["English all-rounder", "Left-handed bat", "Left-arm fast", "Young talent", "Player of the tournament T20 WC"]
]

const clueCategories = [
  "Nationality / Team",
  "Nickname / Trait",
  "Career Highlight",
  "Club / League Info",
  "Batting / Bowling Style"
]

function getRandomIndex(max) {
  return Math.floor(Math.random() * max)
}

function playGame() {
  const playerIndex = getRandomIndex(playerNames.length)
  const correctPlayer = playerNames[playerIndex]
  const clues = cluesList[playerIndex]

  let usedClues = []
  let guessCount = 0
  let maxGuesses = 3
  let guessedCorrectly = false

  console.log("🎯 Welcome to Cricket Clue Challenge!")
  console.log("You can choose any 3 different clue types from the list below:")

  for (let i = 0; i < clueCategories.length; i++) {
    console.log((i + 1) + ". " + clueCategories[i])
  }

  while (guessCount < maxGuesses && !guessedCorrectly) {
    const input = prompt("Choose clue type number (1 to 5):")
    const clueNum = parseInt(input) - 1

    if (clueNum >= 0 && clueNum < 5 && !usedClues.includes(clueNum)) {
      usedClues.push(clueNum)
      console.log("🔍 Clue - " + clueCategories[clueNum] + ": " + clues[clueNum])

      const guess = prompt("Your Guess (Attempt " + (guessCount + 1) + " of 3):")
      if (guess.trim().toLowerCase() === correctPlayer.toLowerCase()) {
        console.log("✅ Correct! The player was: " + correctPlayer)
        guessedCorrectly = true
      } else {
        console.log("❌ Incorrect guess.")
        guessCount++
      }
    } else {
      console.log("❗ Invalid or already used clue number. Try another.")
    }
  }

  if (!guessedCorrectly) {
    console.log("💀 Game Over! The correct player was: " + correctPlayer)
  }
}

playGame()
