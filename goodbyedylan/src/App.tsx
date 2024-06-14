import './App.css'
import { BackgroundGradientAnimation } from './components/background-gradient-animation'
import { BentoCard, BentoGrid } from "./components/magicui/bento-grid"

function App() {
  const messages = [
    {
      name: "Anthony",
      description: "Happy Graduation Dylan! I hope you have a fun day and do things you’ll remember and cherish. Thanks for being such a joy to be around. It might not seem like it but hanging out and doing stuff like hugging a watermelon really made my week sometimes and I appreciate it. You’re the best!",
      image: [],
      className: "lg:row-start-1 lg:row-end-1 lg:col-start-2 lg:col-end-2",
    },
    {
      name: "Sandra",
      description: "Heyyy Dylan!! Congrats on your graduation! You are one of the most impressive and selfless people I know and I will miss you dearly next year. Thanks for all the fun laughs and memories especially the sleepy ones haha. I hope that you buy yourself a nice bike too! We can go on a ride someday! But rest assured we will always have Kai to help us carry our broken items lol.\nP.S. Don't forget to stay away from those blue markers, or else you will end up blue-handed...\nBest,\nSandra :)",
      image: ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra1.PNG?alt=media&token=2ad3cc36-47e2-41ce-816b-0768f138fd36", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra2.PNG?alt=media&token=5388cc74-9441-4730-88c7-7cee69635f56", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra3.PNG?alt=media&token=c273165b-8ab3-472f-9222-41aea90bd209"],
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      name: "Rebecca",
      description: "Hi Dylan, this is Rebecca Ahn from ICSSC! First of all, congrats on graduating!! Even though your time here at ICSSC was only for a couple of years, you made such amazing contributions, which I truly appreciate. Having been your events co-chair last year and a fellow events member this past year, I applaud your dedication to organizing cool events like the Discord Bot workshop and the IoT workshop. It was fun working with you, and I know all of us events members will miss you. I pray that your journey after UCI will go well :D",
      image: [],
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      name: "Jeffery",
      description: "Dylan, congrats on graduating! it’s been so great getting to know you and working with you on events committee these past two years. I hope you have a great time working and wish you the best of luck in all your future endeavors!",
      image: [],
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "Your Justin",
      description:
        "Heyo Dylan, Congrats on graduating! With your hard work and dedication, you finally made it! Who would have known that the Chem house would bring us together. For someone with absolutely no cooking skills or car, thanks for being my personal chef and Uber though the directions could use some work. Also better fix that car as I’ll still need rides next year lol. I have learned so much from you, how to play League, Apex, scramble an egg, oh and in school as well as I am pretty sure you are a better electrical engineer than myself.  I am glad to say that I haven’t picked up on your study habits or sleep schedule either. But for real, you are truly one of the most talented and selfless people I have ever met. I will always cherish the memories that we have whether it be the spontaneous boba runs, trips, senior design project, hackathons (thanks for always repping hardware), and probably so much more I’m forgetting about. I’ll miss having you as my roommate but we’ll still hang out next year so it’s all good. Enjoy working and don’t forget about all of us when you make it big time.",
      image: ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/dim.jpg?alt=media&token=089b0ee7-9455-4ec9-aeaa-93c49abd54fe", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/icscover.jpg?alt=media&token=87bed1cc-1ca4-4c46-a7ca-c697bedede4b"],
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
      name: "Jose",
      description:
        "HEY DYLAN it's jose I just want to say congratulations and great job on your bachelors. You deserve this moment to celebrate your accomplishments and I just want to thank you so much for all the wisdom and joy you brought into my life! I would not be the programmer and person I am today had you not decided to give back to the ICS community by being a Byte  becoming yours and casey bit was one of the best choices(if not the best choice) i made at UCI good luck(no luck needed tho, pure skillz) on your future and do great things! next rounds of boba is on me ",
      image: ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/jose.png?alt=media&token=eb7e1b18-f9d4-46ae-b402-1e8dee68084d"],
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  const messages2 = [
    {
      name: "Anthony",
      description: "Happy Graduation Dylan! I hope you have a fun day and do things you’ll remember and cherish. Thanks for being such a joy to be around. It might not seem like it but hanging out and doing stuff like hugging a watermelon really made my week sometimes and I appreciate it. You’re the best!",
      image: [],
      className: "lg:row-start-1 lg:row-end-1 lg:col-start-2 lg:col-end-2",
    },
    {
      name: "Sandra",
      description: "Heyyy Dylan!! Congrats on your graduation! You are one of the most impressive and selfless people I know and I will miss you dearly next year. Thanks for all the fun laughs and memories especially the sleepy ones haha. I hope that you buy yourself a nice bike too! We can go on a ride someday! But rest assured we will always have Kai to help us carry our broken items lol.\nP.S. Don't forget to stay away from those blue markers, or else you will end up blue-handed...\nBest,\nSandra :)",
      image: ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra1.PNG?alt=media&token=2ad3cc36-47e2-41ce-816b-0768f138fd36", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra2.PNG?alt=media&token=5388cc74-9441-4730-88c7-7cee69635f56", "https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/sandra3.PNG?alt=media&token=c273165b-8ab3-472f-9222-41aea90bd209"],
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      name: "Rebecca",
      description: "Hi Dylan, this is Rebecca Ahn from ICSSC! First of all, congrats on graduating!! Even though your time here at ICSSC was only for a couple of years, you made such amazing contributions, which I truly appreciate. Having been your events co-chair last year and a fellow events member this past year, I applaud your dedication to organizing cool events like the Discord Bot workshop and the IoT workshop. It was fun working with you, and I know all of us events members will miss you. I pray that your journey after UCI will go well :D",
      image: [],
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      name: "Jeffery",
      description: "Dylan, congrats on graduating! it’s been so great getting to know you and working with you on events committee these past two years. I hope you have a great time working and wish you the best of luck in all your future endeavors!",
      image: [],
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      name: "Your Justin",
      description:
        "Heyo Dylan, Congrats on graduating! With your hard work and dedication, you finally made it! Who would have known that the Chem house would bring us together. For someone with absolutely no cooking skills or car, thanks for being my personal chef and Uber though the directions could use some work. Also better fix that car as I’ll still need rides next year lol. I have learned so much from you, how to play League, Apex, scramble an egg, oh and in school as well as I am pretty sure you are a better electrical engineer than myself.  I am glad to say that I haven’t picked up on your study habits or sleep schedule either. But for real, you are truly one of the most talented and selfless people I have ever met. I will always cherish the memories that we have whether it be the spontaneous boba runs, trips, senior design project, hackathons (thanks for always repping hardware), and probably so much more I’m forgetting about. I’ll miss having you as my roommate but we’ll still hang out next year so it’s all good. Enjoy working and don’t forget about all of us when you make it big time.",
      image: [],
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
    {
      name: "Jose",
      description:
        "HEY DYLAN it's jose I just want to say congratulations and great job on your bachelors. You deserve this moment to celebrate your accomplishments and I just want to thank you so much for all the wisdom and joy you brought into my life! I would not be the programmer and person I am today had you not decided to give back to the ICS community by being a Byte  becoming yours and casey bit was one of the best choices(if not the best choice) i made at UCI good luck(no luck needed tho, pure skillz) on your future and do great things! next rounds of boba is on me ",
      image: ["https://firebasestorage.googleapis.com/v0/b/venushacks2024-777a4.appspot.com/o/jose.png?alt=media&token=eb7e1b18-f9d4-46ae-b402-1e8dee68084d"],
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ]
  return (
      <BackgroundGradientAnimation>
        <div className='flex flex-col'>
          <div className='m-5 mt-10 flex-grow'>
            <BentoGrid className="lg:grid-rows-3">
              {messages.map((message) => (
                <BentoCard key={message.name} {...message} />
              ))}
            </BentoGrid>
          </div>
          <div className='m-5 flex-grow'>
            <BentoGrid className="lg:grid-rows-3">
              {messages.map((message) => (
                <BentoCard key={message.name} {...message} />
              ))}
            </BentoGrid>
          </div>
          <div className='m-5 flex-grow'>
            <BentoGrid className="lg:grid-rows-3">
              {messages.map((message) => (
                <BentoCard key={message.name} {...message} />
              ))}
            </BentoGrid>
          </div>
        </div>
    </BackgroundGradientAnimation>
  )
}

export default App
