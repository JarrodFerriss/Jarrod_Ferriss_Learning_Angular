import { SpaceMarineModel } from "../../models/space-marine.model";

export const spaceMarines:SpaceMarineModel[] = [
  {
    id: 1,
    name: 'Marneus Calgar',
    rank: 'Chapter Master',
    yearBorn: '0516',
    chapter: 'Ultramarines',
    equipmentBudget: 1569873561,
    isFallen: false,
    imageUrl: 'assets/images/marneus_calgar.jpg'
  },
  {
    id: 2,
    name: 'Gabriel Angelos',
    rank: 'Captain',
    yearBorn: '0539',
    chapter: 'Blood Ravens',
    equipmentBudget: 5693247852,
    isFallen: false,
    imageUrl: 'assets/images/gabriel_angelos.jpg'
  },
  {
    id: 3,
    name: 'Discarius Hurn',
    rank: 'Sergeant',
    yearBorn: '0654',
    chapter: 'Salamanders',
    equipmentBudget: 5632089645,
    isFallen: true,
    imageUrl: 'assets/images/discarius_hurn.jpg'
  },
  {
    id: 4,
    name: 'Cato Sicarius',
    rank: 'Captain',
    yearBorn: '0540',
    chapter: 'Ultramarines',
    equipmentBudget: 2896537821,
    isFallen: false,
    imageUrl: 'assets/images/cato_sicarius.jpg'
  },
  {
    id: 5,
    name: 'Azrael',
    rank: 'Supreme Grand Master',
    yearBorn: '0541',
    chapter: 'Dark Angels',
    equipmentBudget: 6925418965,
    isFallen: false,
    imageUrl: 'assets/images/azrael.jpg'
  }
];
