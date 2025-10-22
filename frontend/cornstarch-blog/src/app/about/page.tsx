import BlinkingCursor from "@/components/cursor";
import '@/app/globals.css';
import AberrationImage from "@/components/AbberationImage";
export default function AboutPage() {
    return (

        <section className="max-w-3xl mx-auto px-6 py-4 text-justify">
            <h1>~ / self / about<BlinkingCursor />  </h1>
            <p>Hello, I'm Christian Ornelas.</p>
            <br />
            <p>I love hyper-fixating on topics and hobbies. Luckily, this intensive research ends up saving me a lot of time and money, leaving me with a small handful of lifelong creative interests.</p>
            <br />
            <p>I make music, prose and poetry, and occasionally some woodcrafts. Instead of placing my personal projects in silos, I figured I would make my own website: Part portfolio, part blog.</p>
            <br />
            <p>CORNSTARCH will serve as a place to collect all of my personal creative projects into one space. My only goal is to be true to myself and to share the fruits of that labor with the world.</p>
            <br />

            <section className="w-full max-w-full mx-auto mt-0">
                <img
                    src="/Piano_SelfPortrait.jpeg"
                    alt="Self Portrait, Playing Piano."
                />
            </section>


            <h2>/ about / music</h2>
            <p>I fell in love with Jimi Hendrix at about 10 years old and begged my uncle for guitar lessons about the same time. I've been playing ever since and have recently begun releasing experimental music under the name Cartha A.D. My influences include Nine Inch Nail, Radiohead, and of course Jimi.</p>
            <br />
            <h2>/ about / writing</h2>
            <p>In high school I used to write poetry and tear it into pieces because I thought that was a cool thing to do. Now I realize I did it to avoid sitting with my feelings. But you can't tear up a website! Longform writing is new to me, but it is coming soon.</p>
            <br />
            <h2>/ about / whatever</h2>
            <p>I have many aesthetic interests that I've accepted will remain amateur, but I love them nonetheless. CORNSTARCH will slowly trade blank space for personal photography, woodcarvings, and all other physical media that calls to me over time.</p>
            <br />
            <h2>/ about / cornstarch.</h2>
            <p>In college my friends found out my administrative login was my first initial crammed up to most of my last name, “Cornela”. That quickly and lovingly transformed into the nickname Corndog. I never had a stick up my ass so I was cool with it. CORNSTARCH is a nod to the nickname I was apparently born to have.</p>
            <br />
            <section className="w-full max-w-full mx-auto mt-0">
                <AberrationImage
                    src="/EyeRub_SelfPortrait.jpeg"
                    alt="Self Portrait, Playing Piano."
                />
            </section>
        </section >

    );
}
