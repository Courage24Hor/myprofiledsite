// Select the toggle button
const toggleBtn = document.querySelector(".theme-toggle");

// When clicked, toggle dark mode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change the icon from moon to sun
    const icon = toggleBtn.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    // Save the user's theme preference
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".theme-toggle i").classList.replace("fa-moon", "fa-sun");
    }
});

    // === Fade-in Intersection Observer Animation ===
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = { threshold: 0.2 };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

// Simple quote generator
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
    },
    {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr."
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        text: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        author: "H. Jackson Brown Jr."
    },
    {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "André Gide"
    },
    {
        text: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    },
    {
        text: "Life's most persistent and urgent question is, 'What are you doing for others?'",
        author: "Martin Luther King Jr."
    },
    {
        text: "You cannot do kindness too soon, for you never know how soon it will be too late.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.",
        author: "Dalai Lama"
    },
    {
        text: "Always be a first version of yourself and not a second rate version of someone else.",
        author: "Judy Garland"
    },
    {
        text: "Too many people spend money they earned to buy things they don't want to impress people that they don't like.",
        author: "Will Rogers"
    },
    {
        text: "If you want more time, freedom, and energy, start saying no.",
        author: "Unknown"
    },
    {
        text: "Everything in nature invites us constantly to be what we are.",
        author: "Gretel Ehrlich"
    },
    {
        text: "A year from now you may wish you had started today.",
        author: "Karen Lamb"
    },
    {
        text: "Don't dream of winning, train for it!",
        author: "Mo Farah"
    },
    {
        text: "Every action you take is a vote for the type of person you wish to become.",
        author: "James Clear"
    },
    {
        text: "The brain is like a muscle. When it is in use we feel very good. Understanding is joyous.",
        author: "Carl Sagan"
    },
    {
        text: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
        author: "Albert Camus"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "I've failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        text: "It does not matter how slowly you go so long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau"
    },
    {
        text: "You miss 100 percent of the shots you never take.",
        author: "Wayne Gretzky"
    },
    {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        text: "Try not to become a man of success but rather to become a man of value.",
        author: "Albert Einstein"
    },
    {
        text: "Our life is frittered away by detail… simplify, simplify.",
        author: "Henry David Thoreau"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Be kind whenever possible. It is always possible.",
        author: "Dalai Lama"
    },
    {
        text: "By failing to prepare, you are preparing to fail.",
        author: "Benjamin Franklin"
    },
    {
        text: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        text: "Learn to value yourself, which means: to fight for your happiness.",
        author: "Ayn Rand"
    },
    {
        text: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for.",
        author: "Barack Obama"
    },
    {
        text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        author: "William W. Purkey"
    },
    {
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche"
    },
    {
        text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein"
    },
    {
        text: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        author: "Neil Gaiman"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        text: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        text: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        author: "John Lennon"
    },
    {
        text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett"
    },
    {
        text: "It's only after you've stepped outside your comfort zone that you begin to change, grow, and transform.",
        author: "Roy T. Bennett"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one's attitude in any given set of circumstances.",
        author: "Viktor E. Frankl"
    },
    {
        text: "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
        author: "Zig Ziglar"
    },
    {
        text: "Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, Albert Einstein, etc…",
        author: "Attributed to many"
    },
    {
        text: "Life is 10% of what happens to you and 90% of how you react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "Giving up doesn't always mean you're weak, sometimes it means you are strong enough and smart enough to let go and move on.",
        author: "Attributed to many"
    },
    {
        text: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        author: "Jim Rohn"
    },
    {
        text: "Trying to be someone else is a waste of the person you are.",
        author: "Kurt Cobain"
    },
    {
        text: "A rose by any other name would smell as sweet.",
        author: "William Shakespeare"
    },
    {
        text: "Ask not what your country can do for you; ask what you can do for your country.",
        author: "John F. Kennedy"
    },
    {
        text: "Eighty percent of success is showing up.",
        author: "Woody Allen"
    },
    {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
    },
    {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "What doesn't kill us makes us stronger.",
        author: "Friedrich Nietzsche"
    },
    {
        text: "Do the best you can until you know better. Then when you know better, do better.",
        author: "Maya Angelou"
    },
    {
        text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
        author: "Ernest Hemingway"
    },
    {
        text: "If there is no struggle, there is no progress.",
        author: "Frederick Douglass"
    },
    {
        text: "Be not afraid of growing slowly; be afraid only of standing still.",
        author: "Chinese Proverb"
    },
    {
        text: "Sometimes good things fall apart so better things could fall together.",
        author: "Marilyn Monroe"
    },
    {
        text: "People who are crazy enough to think they can change the world are the ones who do.",
        author: "Rob Siltanen"
    },
    {
        text: "Change is the law of life and those who look only to the past or present are certain to miss the future.",
        author: "John F. Kennedy"
    },
    {
        text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
        author: "Malcolm X"
    },
    {
        text: "An investment in knowledge pays the best interest.",
        author: "Benjamin Franklin"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        text: "Failure is not the opposite of success; it is a stepping stone towards it.",
        author: "Sundar Pichai"
    },
    {
        text: "Success isn't about the end result, it's about what you learn along the way.",
        author: "Vera Wang"
    },
    {
        text: "We are products of our past, but we don't have to be prisoners of it.",
        author: "Rick Warren"
    },
    {
        text: "When you get into a tight place and everything goes against you… never give up then, for that is just the place and time that the tide will turn.",
        author: "Harriet Beecher Stowe"
    },
    {
        text: "Whether you think you can or think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        text: "The happiness of your life depends on the quality of your thoughts.",
        author: "Marcus Aurelius"
    },
    {
        text: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author: "Dale Carnegie"
    },
    {
        text: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller"
    },
    {
        text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
        author: "Don Zimmer"
    },
    {
        text: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        author: "Vince Lombardi"
    },
    {
        text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "It's not whether you get knocked down, it's whether you get back up.",
        author: "Vince Lombardi"
    },
    {
        text: "We become what we think about.",
        author: "Earl Nightingale"
    },
    {
        text: "Today's accomplishments were yesterday's impossibilities.",
        author: "Robert H. Schuller"
    }
];

// Get elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Generate random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Update display
function updateQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `– ${quote.author}`;
}

// Event listener
newQuoteBtn.addEventListener('click', updateQuote);

// Optional: Change quote every 30 seconds automatically
setInterval(updateQuote, 30000);

/*function updateGreeting() {
    const greeting = document.getElementById("greeting");
    const now = new Date();
    const hour = now.getHours();

    let message = "";

    if (hour < 12) {
        message = "Good morning!";
    } else if (hour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    greeting.textContent = message;
}

// Update on load
updateGreeting();*/
