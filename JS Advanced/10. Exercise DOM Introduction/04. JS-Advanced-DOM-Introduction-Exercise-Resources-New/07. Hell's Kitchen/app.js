function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let arrayOfRestaurantsAndWorkers = JSON.parse(document.querySelector('#inputs textarea').value);

      let allRestaurants = {};
      for (const element of arrayOfRestaurantsAndWorkers) {

         let [restaurant, allWorkersFromCurrRestrntWithSalary] = element.split(' - ');
         allWorkersFromCurrRestrntWithSalary = allWorkersFromCurrRestrntWithSalary.split(', ');

         if (!allRestaurants.hasOwnProperty(restaurant)) {
            allRestaurants[restaurant] = {};
            allRestaurants[restaurant].workers = [];
         }

         for (const element of allWorkersFromCurrRestrntWithSalary) {

            let [worker, salary] = element.split(' ');

            let obj = {
               worker,
               salary
            }
            allRestaurants[restaurant].workers.push(obj);
         }


      }

      for (const restaurant of Object.keys(allRestaurants)) {

         let averageSalary = averageSalaryCalc(allRestaurants[restaurant]);
         allRestaurants[restaurant].averageSalary = Number(averageSalary.toFixed(2));

         let bestSalary = bestSalaryCalc(allRestaurants[restaurant]);
         allRestaurants[restaurant].bestSalary = Number(bestSalary.toFixed(2));
      }


      let bestRestaurant = findBestRestaurant(allRestaurants);//The best Restaurant is the one with the highest average salary!

      let resultForFirstParagraph = `Name: ${bestRestaurant} Average Salary: ${allRestaurants[bestRestaurant].averageSalary.toFixed(2)} Best Salary: ${allRestaurants[bestRestaurant].bestSalary.toFixed(2)}`;

      let resultForSecondParagraph = '';
      let arrayOfBestRestaurantsWorkers = allRestaurants[bestRestaurant].workers;
      arrayOfBestRestaurantsWorkers.sort((object1, object2) => object2.salary - object1.salary);
      for (const { worker, salary } of arrayOfBestRestaurantsWorkers) {

         resultForSecondParagraph += `Name: ${worker} With Salary: ${salary} `;
      };


      document.querySelector('#bestRestaurant p').textContent = resultForFirstParagraph;
      document.querySelector('#workers p').textContent = resultForSecondParagraph;

      //Functions
      function findBestRestaurant(objectOfObjects) {
         let keysOfObject = Object.keys(objectOfObjects)
         let bestRestaurant = keysOfObject[0];
         let bestRestaurantAvrSalary = objectOfObjects[keysOfObject[0]].averageSalary;

         for (const restaurantName of keysOfObject) {

            let currRestaurant = objectOfObjects[restaurantName];
            if (currRestaurant.averageSalary > bestRestaurantAvrSalary) {
               bestRestaurantAvrSalary = currRestaurant.averageSalary;
               bestRestaurant = restaurantName;
            }
         }
         return bestRestaurant;
      }

      function averageSalaryCalc(object) {
         let sum = 0;
         let workersCounter = 0;

         for (const objectWithWorkesInfo of object.workers) {
            sum += Number(objectWithWorkesInfo.salary);
            workersCounter++;
         }

         let averageSalary = sum / workersCounter;
         return averageSalary;
      }


      function bestSalaryCalc(object) {

         let bestSalary = 0;

         for (const objectWithWorkesInfo of object.workers) {
            let currSalary = Number(objectWithWorkesInfo.salary);

            if (currSalary > bestSalary) {
               bestSalary = currSalary;
            }
         }
         return bestSalary;
      }


   }
}