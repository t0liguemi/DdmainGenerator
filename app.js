const pronouns=["the","some","your","that","certain"]
const adjectives=["hideous","insightful","charismatic","hopeless","vicious","derogatory","viscous"]
const substantives=["airplane","landmass","village","squid","armchair","bonelesschicken"]
const domains=[".com",".cl",".us",".gov",".eu",".de",".io"]
for(let pronoun of pronouns){
    for(let adjective of adjectives){
        for(let substantive of substantives){
            for(let domain of domains){
                console.log(pronoun+adjective+substantive+domain)
            }
        }
    }
}