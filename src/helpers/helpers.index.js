import { collectedTask } from '../constants';

export const collectedTaskExists = selectedProjects =>  
    collectedTaskExists.find(task => task.key === selectedProjects);