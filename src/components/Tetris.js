import React from 'react';

import {createStage} from '../gameHelper'

//Components
import Stage from './Stage';
import Display from './Display';
import Start from './Start';

const Tetris = () => {
    return(
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                < Display text="Score" />
                < Display text = "Rows" />
                < Display text = "Level" />
                </div>
                <Start/>
            </aside>
        </div>
    );
};

export default Tetris;