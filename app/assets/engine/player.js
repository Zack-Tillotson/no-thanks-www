import uuid from 'uuid';

const NAMES = ["Roman","Felicia","Berg","Bonita","Yang","Robinson","Ortiz","Mable","Noelle","Mayra","Tabitha","Norris","Johnnie","Morton","Fox","Carrie","Anna","Sosa","Dona","Browning","Nielsen","Brandy","Lily","Macias","Jeanine","Bethany","Rivers","Whitehead","Peters","Whitfield","Ines","Abby","Kristine","Wilkerson","Lorene","Cantrell","Hensley","Traci","Audra","Hunter","Ruiz","Hall","Willa","Latonya","Jana","Julia","Best","Jayne","Maryellen","Nadine","Claudette","Meyers","Bruce","Monica","Reynolds","Contreras","Spears","Teri","Christensen","Leon","Gladys","Bernice","Carly","Robyn","Candace","Billie","Delores","Pat","Walls","Marie","Bettie","Wilkins","Tracey","Charlotte","Gilda","Lindsay","Natalie","Fanny","Maryanne","Mcleod","Margie","Roberson","Ward","Mckenzie","Jannie","Cash","Cherry","Kirk","Karen","Montoya","Sheppard","Joyner","Inez","Terry","Cassie","Lina","Fulton","Poole","Hull","Dolly","Kramer","Gwen","George","Alvarado","Maddox","Linda","Alba","Cooley","Margo","Combs","Roth","Justice","Whitney","Schmidt","Wagner","Livingston","Shaw","Tia","Bailey","Burns","Baird","Elena","Clarice","Hudson","Tamara","Letha","Hester","Cantu","Hebert","Houston","Mills","Mcconnell","Fischer","Olsen","Sophia","Fletcher","Vazquez","Frances","Rae","Lucas","Elva","Frankie","Kelli","Nichols","Bridgette","Annette","David","Lynn","Savage","Pearlie","Mary","Christian","Minnie","Doreen","Mejia","Bird","Oliver","Burgess","Duran","Kaitlin","Rogers","Wall","Walton","Blackburn","Chandra","Andrews","Carr","Nona","Glover","Lewis","House","Shawna","Alexander","Russo","Rhea","Massey","John","Cassandra","Isabelle","Riley","Shanna","Gordon","Jessie","Carol","Michael","Bolton","Davidson","Case","Andrea","Stanley","Weber","Hines","Alice","James","Mariana","Smith","Elaine","Mccormick","Rodriguez","Margret","Burt","Edith","Brittney","Merle","Amy","Carissa","Orr","Goodwin","Parrish","Leila","Ilene","Knowles","Travis","Jamie","Lola","Enid","Tillman","Jordan","Josefa","Strong","Sanford","Sears","Conner","Morgan","Agnes","Padilla","Shawn","Jeannie","Catalina","Glass","Kristy","Shannon","Zimmerman","Kinney","Sampson","Gail","Durham","Concepcion","Heath","Tammi","Jennifer","Mccall","Head","Darcy","Beach","Hodges","Cameron","Duncan","Ross","Matilda","Bessie","Ila","Erika","Gabriela","Mercer","Elvia","Wiley","Kim","Harris","Margaret","Francis","Rosalyn","Lucy","Virgie","Buchanan","Rene","Bartlett","Johanna","Shauna","Myrtle","Hardin","Celeste","Dodson","Sargent","Kathie","Mays","Miriam","Ballard","Greer","Barr","Vinson","Grace","Cortez","Earline","Maggie","Tyler","Debbie","Lillian","Naomi","Joan","Kim","Mildred","Cabrera","Bertie","Lisa","Bass","Ratliff","Drake","Hughes","Johnston","Singleton","Lynch","Leonor","Estes","Molina","Vanessa","Bobbi","Maude","Marylou","Boone","Della","Faye","Berger","Francine","Blake","Esther","Tisha","Graciela","Dominique","Lauren","Eaton","Stephenson","Day","Olive","Viola","Sandra","Cathryn","Solomon","Booker","Concetta","Puckett","Frye","Lydia","Hardy","Kimberley","Rowena","Maxwell","Bettye","Virginia","Blevins","Nelson","Annie","Cannon","Elsie","Jenkins","Bush","Reyna","Heidi","Odonnell","Bonner","Marilyn","Marietta","Griffith","Earnestine","Simpson","Clarissa","Webb","Stefanie","Faulkner","Hurst","Rasmussen","Lilia","Carmella","Aida","Mckinney","Dixon","Maricela","Dee","Ina","Garner","Edwards","Donna","Saunders","Knox","Imogene","Mavis","Suzette","Jefferson","Beatriz","Medina","Floyd","Wood","Kennedy","Gayle","Priscilla","Alison","Cross","Winnie","Petersen","Vonda","Christa","Kay","Alfreda","Saundra","Brewer","Cole","Maura","Mattie","Wendy"]
const STARTING_PLAYER_MONEY = 11;

function getPlayer(state, who) {
  const list = state.players.list;
  if(list.length)
    return list.find((person) => who.__id__ === person.__id__);
  else 
    return null;
}

function getLastPlayer(state) {
  const list = state.players.list;
  if(list.length)
    return list[list.length - 1]
  else
    return null;
}

export default {
  addPlayer(state) {
    return {
      __id__: uuid.v4(),
      name: NAMES[parseInt(Math.random() * NAMES.length)],
      money: STARTING_PLAYER_MONEY,
      cards: []
    }
  },
  removePlayer(state, who) {
    return who ? getPlayer(state, who) : getLastPlayer(state);
  },
  resetPlayers(players) {
    return players
      .sort((a,b) => Math.random() > .5)
      .map((player) => {
      return {...player, money: STARTING_PLAYER_MONEY, cards: []}
    });
  }
}