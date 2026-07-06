## Prerequisites and Installation

Install Node.js , as it is a javascript runtime environment, used to execute Javascript as well as React Programs.
Once Installed, using npm(node package manager), we can install a vite[a frontend lightweight tool and development server] or parcel. 
```bash
npm create vite@latest
```
Create a Project Name and Select the Javascript Framework and Libraries [React].
```bash
npm install
npm run dev
```

## Project Structure

```text
src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── PokemonCard.jsx
└── PokemonData.jsx
```


### Explanation

- Here we learn about, Dealing with the Complex Api, which is arranged in the form of array. Here each element of an array consist of API, Where API contains the Details for Each Pokemon Characters.
- So, Our first step is, creating a component, and calling the API, inside the UseEffect Hooks, to deal with the sideEffects. 
- We called the API inside the function using 'Fetch' Method, which we can use it either by using promises or by using async-await.  Fetch usually returns Promises(a promises is just like as a placeholder that returns the result of asynchronous behaviour, which may be either resolved or rejected).
- Once we console the Api data for the first time, we get the bunch of arrays. Inside those arrays we have a another API, which we have to deal with.
- To deal with that again , we using Fetch method, and using map method, traverse all the Array element, and return the API.
- On console, we get all the Api data, which we need to furhter use, so to use , first we need to perform the Promise methods, like we know that Promises have methods like(promise.all- when all the promises are resolved then only execute), promise.allSettled(return all the promises data that is either resolved or rejected), or promise.race() - that returns the first promise value that is resoved). Here we use Promise.all() methods, and put the all bundled of array inside Promise.all().
- Once it executed, it returns a Proper Array like Structure, which we can simply store it using useState state management, to get all the data.
- Once we set the data, we can now get all the required data, and display it to User Interface using Map method.
  







