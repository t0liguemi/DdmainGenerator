pronouns=["the","some","your","that","certain"]
adjectives=["hideous","insightful","charismatic","hopeless","vicious","derogatory","viscous"]
substantives=["airplane","landmass","village","squid","armchair","bonelesschicken"]
domains=[".com",".cl",".us",".gov",".eu",".de",".io"]

for(pronoun of pronouns){
    for(adjective of adjectives){
        for(substantive of substantives){
            for(domain of domains){
                console.log(pronoun+adjective+substantive+domain)
            }
        }
    }
}