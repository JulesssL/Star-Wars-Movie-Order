function print(a) {
    console.log(a)
}

const allPosters = ['resources/img/posters/sw1.jpg', 'resources/img/posters/sw2.jpg', 'resources/img/posters/the-clone-wars.jpg', 'resources/img/posters/sw3.jpg', 'resources/img/posters/the-bad-batch.jpg', 'resources/img/posters/solo.jpg', 'resources/img/posters/obi-wan.jpg', 'resources/img/posters/rebels.jpg', 'resources/img/posters/andor.jpg', 'resources/img/posters/rogue-one.jpg', 'resources/img/posters/sw4.jpg', 'resources/img/posters/sw5.jpg', 'resources/img/posters/sw6.jpg', 'resources/img/posters/mandalorian.jpg', 'resources/img/posters/boba.jpg', 'resources/img/posters/ahsoka.jpg', 'resources/img/posters/resistance.jpg', 'resources/img/posters/sw7.jpg', 'resources/img/posters/sw8.jpg', 'resources/img/posters/sw9.jpg']

const allDates = ['1999', '2002', '2008', '2005', '2022', '2018', '2022', '2014', '2022', '2016', '1977', '1980', '1983', '2019', '2021', '2023', '2018', '2015', '2017', '2019']

const allTitles = ['La menace Fantôme', "L'attaque des Clones", 'The Clone Wars', 'La Revanche des Sith', 'The Bad Batch', 'Solo, a Star Wars Story', 'Obi-Wan Kenobi', 'Star Wars Rebels', 'Andor', 'Rogue One, a Star Wars Story', 'Un Nouvel Espoir', "L'Empire Contre-Attaque", 'Le Retour du Jedi', 'The Mandalorian', 'Le livre de Boba Fett', 'Ahsoka', 'Star Wars Resistance', 'Le réveil de la Force', 'Les Derniers Jedi', "L'Ascension de SkyWalker"]

const allTexts = ["La Menace Fantôme est un épisode captivant de la saga Star Wars qui transporte les spectateurs dans une galaxie lointaine, présentant des personnages emblématiques, des combats de sabres laser époustouflants et une intrigue politique complexe, tout en introduisant le jeune Anakin Skywalker et le mystérieux Dark Sidious. Plongez dans un univers riche en histoire et en action, où les forces du bien et du mal s'affrontent dans un récit palpitant et visuellement épique.",
    "L'Attaque des Clones plonge les spectateurs au cœur d'une épopée intergalactique palpitante, présentant des batailles épiques, des intrigues politiques complexes et l'évolution de l'amour interdit entre Anakin Skywalker et Padmé Amidala. Ce volet de la saga Star Wars offre des moments mémorables, des combats de sabres laser à couper le souffle et une exploration approfondie de l'univers étendu de la galaxie lointaine. Embarquez pour une aventure captivante où les forces du bien et du mal s'affrontent dans une bataille pour la survie et la liberté.",
    "Explorez les champs de bataille galactiques et les intrigues épiques avec 'The Clone Wars'. Cette série animée plonge au cœur de la Guerre des Clones, mettant en lumière les héros Jedi, les clones et les nouveaux personnages dans des aventures captivantes, tout en élargissant l'univers Star Wars avec des arcs narratifs complexes et des moments émotionnels poignants.",
    "Assistez à la montée des ténèbres avec 'La Revanche des Sith'. Ce volet épique explore la tragédie de la transformation d'Anakin Skywalker en Dark Vador. Des batailles galactiques aux décisions cruciales, cet épisode offre des moments mémorables et bouleversants.",
    "Plongez dans le monde passionnant et déchiré par la guerre de Star Wars avec 'The Bad Batch'. Cette série animée suit une équipe de clones d'élite aux compétences uniques alors qu'ils naviguent dans les événements tumultueux de l'Ordre 66 et les débuts de l'Empire Galactique. Entre action intense, mystères palpitants et liens émotionnels profonds, 'The Bad Batch' offre une nouvelle perspective captivante sur l'univers Star Wars, élargissant encore davantage le récit de cette galaxie lointaine.",
    "Explorez les origines du contrebandier emblématique Han Solo dans 'Solo: A Star Wars Story'. Ce film captivant plonge les spectateurs dans le monde du crime galactique, des courses effrénées et des rencontres avec des personnages emblématiques tels que Chewbacca et Lando Calrissian. Suivez Han dans sa quête pour devenir le pilote légendaire que nous connaissons, avec des twists inattendus, des alliances audacieuses et des aventures qui captivent de la première à la dernière minute.",
    "L’histoire se déroule dix ans après la fin tragique de « Star Wars : La revanche des Sith » et suit Obi-Wan Kenobi alors qu’il veille sur le jeune Luke Skywalker sur la planète Tatooine.La Troisième Sœur, une inquisitrice impériale, décide d’enlever Leia pour obliger Obi-Wan à sortir de sa cachette et ainsi être livré à Dark Vador. Au départ réticent à reprendre le combat, Obi-Wan décide finalement de partir sauver la jeune princesse.",
    "Dans 'Rebels', rejoignez un groupe hétéroclite de rebelles dans leur lutte contre l'Empire. Avec de nouveaux personnages, des retrouvailles émouvantes et des liens poignants avec la saga principale, cette série explore la résistance naissante d'une manière captivante.",
    "La série Andor se déroule 5 ans avant la Bataille de Yavin et la destruction de la première Étoile Noire. Elle nous permet de découvrir la naissance de l’Alliance, du Service des Renseignements Rebelle et répond surtout à de nombreuses questions qui taraudent les fans depuis des années !",
    "Plongez dans les coulisses de la Rébellion dans 'Rogue One: A Star Wars Story'. Ce film captivant explore l'histoire de l'équipe audacieuse qui a volé les plans de l'Étoile de la Mort, l'arme ultime de l'Empire Galactique. Avec des personnages mémorables, des batailles épiques et des moments poignants, 'Rogue One' offre une perspective unique sur l'univers Star Wars et les sacrifices héroïques qui ont façonné la saga.",
    "Un Nouvel Espoir' marque le début de la saga originale. Suivez Luke Skywalker, la princesse Leia et Han Solo dans leur quête contre l'Empire, avec des batailles spatiales emblématiques et l'esprit héroïque qui définira la Rébellion.",
    "Dans 'L'Empire Contre-Attaque', l'univers Star Wars s'assombrit. Découvrez des révélations choquantes, des batailles épiques sur Hoth et une confrontation mémorable entre Luke Skywalker et Dark Vador. Un épisode captivant qui défie les attentes.",
    "Le Retour du Jedi' conclut la trilogie originale avec panache. Des combats épiques sur Endor à la confrontation finale entre père et fils, cet épisode offre une conclusion émotionnelle et satisfaisante à l'histoire de la famille Skywalker.",
    "The Mandalorian est un space western où il est question d'y suivre les aventures d'un chasseur de primes Mandalorien à travers une galaxie où la Nouvelle République est en train de remplacer l'Empire après sa chute. Durant ses missions, il va notamment croiser la route d'un enfant mystérieux.",
    "De retour sur Tatooine après les événements de The Mandalorian, le légendaire chasseur de primes Boba Fett et la mercenaire Fennec Shand doivent trouver leur voie et assoir leur pouvoir sur l'ancien territoire de Jabba le Hutt.",
    "Peu de temps après la chute de l'Empire galactique et l'avènement de la Nouvelle République, l'avenir de cette dernière semble assuré : suite à la libération de Mandalore +, les différents seigneurs de guerre impériaux sont plus dispersés et divisés que jamais. Mais quand deux jedi renégats font évader une prisonnière de valeur, Morgan Elsbeth, l'ancienne Jedi Ahsoka Tano part à leur poursuite avec l'aide de son ex-apprentie Sabine Wren et de la générale Héra Syndulla",
    "Embarquez pour des aventures passionnantes dans une galaxie lointaine avec 'Star Wars Resistance'. Cette série animée suit Kazuda Xiono, un jeune pilote, alors qu'il devient espion pour la Résistance. Explorez des courses aériennes palpitantes, des mystères intrigants et des personnages colorés, le tout dans le contexte de l'émergence du Premier Ordre. 'Star Wars Resistance' offre un mélange unique d'action, d'humour et de drame, enrichissant l'univers Star Wars avec de nouveaux visages et de nouvelles histoires.",
    "Entrez dans une nouvelle ère avec 'Le Réveil de la Force'. Rencontrez de nouveaux héros, affrontez de nouveaux ennemis et redécouvrez des visages familiers. Une aventure captivante qui ravive la flamme de la saga Star Wars.",
    "Les Derniers Jedi' bouscule les conventions avec des rebondissements inattendus. Explorez de nouvelles dimensions de la Force, assistez à des confrontations épiques et plongez dans une histoire qui élargit la mythologie Star Wars de manière inattendue.",
    "L'Ascension de Skywalker' offre une conclusion épique à la saga Skywalker. Suivez Rey, Finn et Poe dans une quête finale contre la menace de Palpatine, avec des révélations choquantes, des combats spectaculaires et une conclusion qui marquera l'histoire de Star Wars."]

const allLogos = ['resources/img/icon/logo1.svg', 'resources/img/icon/logo2.svg', 'resources/img/icon/logo3.svg']

let numberLogo = 0

let allPoints = document.querySelectorAll('[class^="point"]')
print(allPoints)
let numberPoster = 0

let movieTitle = document.querySelector('.movieTitle')

let movieText = document.querySelector('.movieText')

let date = document.querySelector('.date')

let arrowRight = document.querySelector('.arrowRight')

let arrowLeft = document.querySelector('.arrowLeft')

let posterImage = document.querySelector('.posterImage')

let activePoint = document.querySelector('.point0')

let imgLogoTopLeft = document.querySelector('.imgLogoTopLeft')

document.addEventListener('DOMContentLoaded', () => {
    date.innerText = allDates[numberPoster]
    movieText.innerText = allTexts[numberPoster]
    movieTitle.innerText = allTitles[numberPoster]
    posterImage.src = allPosters[numberPoster]
    arrowRight.addEventListener('click', () => {
        activePoint.classList.remove('active')
        if (numberPoster == 19) {
            numberPoster = 0
        } else {
            numberPoster++
        }
        activePoint = document.querySelector(`.point${numberPoster}`)
        activePoint.classList.add('active')
        date.style.opacity = '0'
        posterImage.style.transform = 'translateX(100vw)'
        movieText.style.transform = 'translateX(-100vw)'
        movieTitle.style.transform = 'translateX(-100vw)'
        setTimeout(function () {
            posterImage.src = allPosters[numberPoster]
            posterImage.style.transform = 'translateX(0)'
            movieText.innerText = allTexts[numberPoster]
            movieText.style.transform = 'translateX(0)'
            movieTitle.innerText = allTitles[numberPoster]
            movieTitle.style.transform = 'translateX(0)'
            date.innerText = allDates[numberPoster]
            date.style.opacity = '1'
        }, 600)
        if (numberLogo == 2) {
            numberLogo = 0
        } else {
            numberLogo++
        }
        imgLogoTopLeft.src = allLogos[numberLogo]


    })
    arrowLeft.addEventListener('click', () => {
        activePoint.classList.remove('active')
        if (numberPoster == 0) {
            numberPoster = 19
        } else {
            numberPoster--
        }
        activePoint = document.querySelector(`.point${numberPoster}`)
        activePoint.classList.add('active')
        date.style.opacity = '0'
        posterImage.style.transform = 'translateX(100vw)'
        movieText.style.transform = 'translateX(-100vw)'
        movieTitle.style.transform = 'translateX(-100vw)'
        setTimeout(function () {
            posterImage.src = allPosters[numberPoster]
            posterImage.style.transform = 'translateX(0)'
            movieText.innerText = allTexts[numberPoster]
            movieText.style.transform = 'translateX(0)'
            movieTitle.innerText = allTitles[numberPoster]
            movieTitle.style.transform = 'translateX(0)'
            date.innerText = allDates[numberPoster]
            date.style.opacity = '1'
        }, 600)

        if (numberLogo == 0) {
            numberLogo = 2
        } else {
            numberLogo--
        }
        imgLogoTopLeft.src = allLogos[numberLogo]
    })
})