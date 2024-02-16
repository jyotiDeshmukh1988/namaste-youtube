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
  