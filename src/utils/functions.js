const ranges = [
    {
      divider: 1e3,
      suffix: "K",
    },
    {
      divider: 1e6,
      suffix: "M",
    },
    {
      divider: 1e9,
      suffix: "B",
    },
  ];
  
  export const formatNumber = (input) => {
    for (let index = ranges.length - 1; index >= 0; index--) {
      if (input > ranges[index].divider) {
        let quotient = input / ranges[index].divider;
  
        if (quotient < 10) {
          quotient = Math.floor(quotient * 10) / 10;
        } else {
          quotient = Math.floor(quotient);
        }
  
        return quotient.toString() + ranges[index].suffix;
      }
    }
  
    return input.toString();
  };
  
  export const formatDuration = (duration) => {
    return duration
      .replace(/(^PT|S$)/g, "")
      .split(/[^\d]/)
      .map((item) => (item.length < 2 ? "0" + item : item))
      .join(":")
      .replace(/^0/, "");
  };
  
  export const timeDifference = (current, previous) => {
    
  var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
  
    var elapsed = current - previous;
  
    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  };
  
  // random name generator
  const nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export const generateRandomName = () =>{
   return nameList[Math.floor( Math.random() * nameList.length )];
};

// random message generator
export function generateRandomMessage(numParagraphs, numSentencesPerParagraph) {
  const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'];
  const paragraphs = [];

  for (let p = 0; p < numParagraphs; p++) {
    const sentences = [];

    for (let i = 0; i < numSentencesPerParagraph; i++) {
      const numWords = Math.floor(Math.random() * 2) + 1;
      const sentenceWords = [];

      for (let j = 0; j < numWords; j++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        sentenceWords.push(words[randomIndex]);
      }

      const sentence = sentenceWords.join(' ') + '.';
      sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1));
    }

    paragraphs.push(sentences.join(' '));
  }

  return paragraphs.join('\n\n');
}