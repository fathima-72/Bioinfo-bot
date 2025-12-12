const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! 😊",
    "hey": "Hey! How can I help you?",

    "what is bioinformatics":
    "Bioinformatics uses biology + computer science + mathematics to analyze DNA, RNA, proteins and biological data.",

    "scope of bioinformatics":
    "Huge scope: AI in healthcare, genomics, cancer research, drug design, precision medicine, NGS analysis, agriculture, and forensics.",

    "uses of bioinformatics":
    "Uses: vaccine development, genome comparison, protein structure prediction, disease gene identification, drug target discovery.",

    "applications of bioinformatics":
    "Applications include NGS pipelines, genome annotation, phylogenetics, protein modeling, personalized medicine, and big-data biology.",

    "what is dna":
    "DNA carries all genetic information required for growth, functioning, and reproduction of life.",

    "what is rna":
    "RNA helps convert DNA instructions into proteins. Types: mRNA, tRNA, rRNA.",

    "what is protein":
    "Proteins perform most functions in the body — enzymes, antibodies, signaling, and structure.",

    "what is genomics":
    "Genomics studies entire genomes — their sequence, structure, function, and evolution.",

    "what is proteomics":
    "Proteomics studies all proteins in a cell, including structure and interactions.",

    "what is transcriptomics":
    "Transcriptomics studies all RNA expressed in a cell at a given time.",

    "ai in bioinformatics":
    "AI is used for cancer detection, protein folding (AlphaFold), predicting diseases, and drug discovery.",

    "careers in bioinformatics":
    "Career roles: Bioinformatics analyst, Genomic data scientist, Computational biologist, Research scientist, Clinical bioinformatician.",

    "bioinformatics tools":
    "Common tools: BLAST, FASTQC, NCBI, UCSC Genome Browser, ClustalW, PyMOL, Biopython, GROMACS.",

    "what is mutation":
    "A mutation is a change in DNA sequence, which can be harmful, neutral, or beneficial."
};

function sendMessage() {
    let input = document.getElementById("userInput");
    let userText = input.value.trim();

    if (userText === "") return;

    displayMessage(userText, "user");
    input.value = "";

    let reply = responses[userText.toLowerCase()] 
                || "I'm still learning! But feel free to ask me anything about biology, AI, or bioinformatics. 😊";

    setTimeout(() => typingEffect(reply), 500);
}

function displayMessage(text, sender) {
    let box = document.getElementById("chat-box");
    let msg = document.createElement("div");

    msg.classList.add("message", sender);
    msg.innerText = text;

    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
}

/* ---- Typing Animation ---- */
function typingEffect(text) {
    let box = document.getElementById("chat-box");
    let msg = document.createElement("div");
    msg.classList.add("message", "bot");

    box.appendChild(msg);

    let index = 0;
    let interval = setInterval(() => {
        msg.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            clearInterval(interval);
        }
    }, 20);

    box.scrollTop = box.scrollHeight;
}
