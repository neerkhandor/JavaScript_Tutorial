// JS is Synchronous Language(ek code exec uske baad dusra code)
// Single Threaded
// js sync hai aur sync hi rahega
// js is single threaded so we will feel it is slow language but language doesnt make us feel that it is slow
// sirf js ka engine use karoge then obv single threaded hai to exec choke hojata hai,performance slow hojata hai
// but good thing is that js kabhi bhi akela nahi kilta
// js kabhi bhi akela sirf js engine ke saath mahi hota woto 
// ya to node environment,browser ke env mein hota hai
// this is single thread(each exec wait for the last one to complete before executing)
// jab tak purana step complete nahi hota tab tak naye step mein nahi jaate
// exec one line of code at time

// blocking code -> block the flow of program -> Read file Sync
// (mein paani leke aata hu tab tak aap kuch mat karna)

// non-blocking code -> does not block the flow of program -> Read file ASync
// (mein paani leke aata hu tum tab tak game khelo)

// the biggest nightmare for programmers is to read file
// mathematical exec wagera aaj kal koi bada problem nahi hai but jaise aap ne kaha ek file read karo
// ek file mein se data leke aao to wo bohot bada problem hai
// os mein kya hota hai file aapka program nahi read kar sakta aapko file read karvane ke liye context dena
// padta hai kernel ko kernel jaata hai uss program ya file ko access karta hai read karke wapas se exec 
// diya jata hai kernel se to program and fir bola jata hai ki kaam hogaya
// ye jo process hai usme kernel aapke liye wait to nahi kar raha wo bolta hai ruko 10 min mera kaam hojane
// do baad mein aapka kam karenge hamare paas aapki jesi bohot request hoti hai but tab tak ham dusra kuch 
// nahi kar sakte
// js ke paas itni/browser ke paas itni power nahi hoti ki wo file read kar sake
// file system ka access aapko node js mein milta hai
// just understand one thing in reading the file synchronously the time it will take to read the file let it
// be 5 sec ,10 sec,1 min, or 10 min you cant do anything else at that time.
// but if you read file async then you can do remaining things and once the file is ready it will notify me
// we cant say that non-blocking code is best
// suppose we have a use case where we have to give success message once user completes his/her registration
// database kya hain ekm file structure hai jisme aap data read,write kar rahe ho
// suppose iss case mein if i write non-blocking code so mein kya bolunga db mein aap save hote raho mein
// to user ko successful registration ka message de deta hu hosakta hai ki jab aap usse write kar rahe ho tab koi error
// aajaye to hamesha use cases hote hai so in this case i will use blocking code ki jab tak meujhe db mein 
// entry hoke mujhe response na miljaye ke succesfully details enter hui hai ya nahi tab tak mein user ko koi msg nahi dunga

// event loop
// js engine (V-8) is basically made of Memory heap and call stack but jab ham browser dekhte hai ya node,dino,bun jaise
// env dekhte hai unme sirf js engine nahi hota 
// web api browser mein milti hai browser ke alawa kahi nahi milti kabhi environment var bhi hote hai jaise ki node(to yahape dom ki api nahi milegi kyuki yahpe document object hi nhi hai)
// task queue is the reason jiske karan js itna fast hai there is one more queue high priority queue which is for promises
// koi aisa resource ho jisse mein keh saku ke ye kam hoke mujhe baad mein wapas yaad diladena
// to wo saara mechanism karnekeliye we have web api and node apis
// register call back registers all the call backs kyuki wo aync hai immediate thodi hai jab aap chah rahe ho tabhi ho raha hai
// task queue (fifo) mein callback add hojata hai and from their it is added into call stack
// 1 setTimeout(0,2) 3 
// 1 3 2
// this is a misconception that since we are exec in 0 sec so it should happen immediately
// but from call stack first it will go as call to register call stack from there to task queue and from there to call stack
// and till this time 3 will be executed
//  fetch() ke andar jo promise hoti hai wo hi callback hote hai and call stack mein add hoti hai but just inme high priority hoti hai
