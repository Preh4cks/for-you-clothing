/**
 * Author: Arjhay Frias
 * Created_at: 11/12/2023
 * Updated_at: 11/12/2023
 * 
 * Description: RankingSort.js Sorts Product List Based on User Preferences
 * 
 */

class RankingSort {
  /**
   * DOCU: Returns the error rate
   * @param sigmoind X
  */
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  /**
   * DOCU: Compute the total log loss from the logistic regression
   * @param features 
   * @param1 labels
   * @param2 weights
  */
  computeCost(features, labels, weights) {
    const NUMBER_OF_SAMPLES = features.length; // Get Total Length of features
    let cost = 0;

    for (let i = 0; i < NUMBER_OF_SAMPLES; i++) {
      const z = this.dotProduct(features[i], weights);
      const h = this.sigmoid(z);
      cost += labels[i] * Math.log(h) + (1 - labels[i]) * Math.log(1 - h);
    }

    return -cost / NUMBER_OF_SAMPLES; // Get The Average Cost
  }

  /**
   * DOCU: Get the product of both arrays
   * @param array
   * @param array2
   */
  dotProduct(array, array2) {
    return array.reduce((sum, value, i) => sum + value * array2[i], 0);
  }

  /**
   * DOCU: Find the lowest margin of error and returns the cost function
   * @param features
   * @param2 labels
   * @param3 weights
   * @param4 learning_rate
   * @param5 learning_itterations
  */
  gradientDescent(features, labels, weights, learning_rate, learning_itterations) {
    // Number of Total Features
    const NUMBER_OF_SAMPLES = features.length;
    // Set to the highest cost
    let cost = 1;

    // For each itterations get the total compute cost 
    for (let iteration = 0; iteration < learning_itterations; iteration++) {
      let gradientSum = new Array(features[0].length).fill(0);

      // For each test samples 
      for (let i = 0; i < NUMBER_OF_SAMPLES; i++) {
        const TOTAL_PRODUCT = this.dotProduct(features[i], weights);
        const TOTAL_PRODUCT_REDUCED = this.sigmoid(TOTAL_PRODUCT);
        const ERROR_RATE = TOTAL_PRODUCT_REDUCED - labels[i];

        // Update the gradient sum for each features
        for (let j = 0; j < features[i].length; j++) {
          gradientSum[j] += ERROR_RATE * features[i][j];
        }
      }

      // For each features, reduce weights
      for (let j = 0; j < features[0].length; j++) {
        weights[j] -= (learning_rate / NUMBER_OF_SAMPLES) * gradientSum[j];
      }

      // Update Cost Function
      cost = this.computeCost(features, labels, weights);
    }

    console.log("Total Cost: " + cost);
    return cost;
  }

  /**
   * DOCU: Get the Middle Average
   * @param cost
  */
  adjust(cost) {
    return (cost - 0.5) * 2;
  }

  /**
   * DOCU: Returns the highest price of all the products
   * @param product_list
  */
  getHighestPrice(product_list) {
    let highest_price = 0;
    
    for(let i = 0; i < product_list.length; i++) {
      if(product_list[i].discounted_price > highest_price) {
        highest_price = product_list[i].discounted_price;
      }
    }

    return highest_price;
  }


  getPercentValue(highest, lowest, current) {
    const VAL = ((current - lowest) - (highest - lowest)) / (highest - lowest) * -1;
      
    if(VAL > 1 || VAL < 0) {
      return 0.5;
    }

    return +(((VAL - 1) * -1).toFixed(2)); 
  }

  getMatchScore(str1, str2) {
    // 1. Preprocessing (Lowercase, Trim)
    str1 = str1.toLowerCase().trim();
    str2 = str2.toLowerCase().trim();
  
    // 2. Calculate Levenshtein Distance
    const dp = Array(str1.length + 1)
      .fill(null)
      .map(() => Array(str2.length + 1).fill(null));
  
    for (let i = 0; i <= str1.length; i++) {
      dp[i][0] = i;
    }
  
    for (let j = 0; j <= str2.length; j++) {
      dp[0][j] = j;
    }
  
    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);   
  
      }
    }
  
    const distance = dp[str1.length][str2.length];
  
    // 3. Calculate Similarity (0 to 1)
    const longerLength = Math.max(str1.length, str2.length);
    const similarity = (longerLength - distance) / longerLength;
    // 4. Compare to Threshold
    return similarity;
  }

  getDistance(s1, s2) {
    let costs = new Array();
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    for(let i = 0; i <= s1.length; i++) {
      let lastValue = i;

      for (let j = 0; j <= s2.length; j++) {
        if(i == 0) {
          costs[j] = j;
        } else {
          if(j > 0) {
            let newValue = costs[j - 1];

            if(s1.charAt(i - 1) != s2.charAt(j - 1)) {
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
      }

      if (i > 0) {
        costs[s2.length] = lastValue;
      }
    }

    return costs[s2.length];
  }


  calculateMatchScore(array1, array2) {
    let matchCount = 0;
  
    for (const element of array1) {
      if (array2.includes(element)) {
        matchCount++;
      }
    }
  
    // Basic scoring: 1 point per match
    const score = matchCount; 
  
    return score;
  }


  // Get Tag Matched Score
  getTagsScore(product) {
    let total_tag_score = 0;

    for(let j = 0; j < score_scale.tags.length; j++) {
      if(product.tags.includes(score_scale.tags[j].tag)) {
        total_tag_score += score_scale.tags[j].score;
      }
    }

    return total_tag_score;
  }

  matchGender(gender, tag_list) {
    if(gender == 1 && (tag_list.includes("male") || tag_list.includes("men"))) {
      return 1;
    } else if(gender == 0 && (tag_list.includes("female") || tag_list.includes("women"))) {
      return 0;
    } else if(gender == 0.5) {
      return 0.5;
    }

    return 0;
  }
}

module.exports = new RankingSort();