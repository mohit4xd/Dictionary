const input=document.querySelector(".input");
const submit=document.querySelector(".sbt");
const mng=document.querySelector(".meaning");

submit.addEventListener('click',()=>{
var x=input.value;
console.log(x)
findMeaning(x);
})

async function findMeaning(x){
    var def=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${x}`)
    var def1=await def.json()
    console.log(def1)
    var d=def1[0].meanings[0].definitions[0].definition;
    if (d="") {
        mng.innerHTML=`<p>not found</p>`;
    }
    else{
    mng.innerHTML=`<p>Meaning:&nbsp ${def1[0].meanings[0].definitions[0].definition}</p><br>
   <p> PartOfSpeech: &nbsp ${def1[0].meanings[0].partOfSpeech}</p><br>
   <p> phonetic: &nbsp ${def1[0].phonetic}</p><br>`
   if(def1[0].meanings[0].synonyms!=""){
   mng.innerHTML+=
    `<p>Synonyms: &nbsp ${def1[0].meanings[0].synonyms}</p><br>
    `;
    }
   if(def1[0].meanings[0].antonyms!=""){
   mng.innerHTML+=
    `<p>Antonyms: &nbsp ${def1[0].meanings[0].antonyms}</p><br>
    `;
    }

    }
}