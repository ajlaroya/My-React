import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
        <TileBackground>{" "}</TileBackground>
        <TileContent>
            <Tile 
                page={0} 
                renderContent={({progress}) => <span className='text-9xl'>Foo {progress}</span>}
            >
                
            </Tile>
        </TileContent>
        <TileContent>
            <Tile 
                page={1} 
                renderContent={({progress}) => <span className='text-9xl'>Bar {progress}</span>}
            >
                
            </Tile>
        </TileContent>
        <TileContent>
            <Tile 
                page={2} 
                renderContent={({progress}) => <span className='text-9xl'>Baz {progress}</span>}
            >
                
            </Tile>
        </TileContent>
    </TileWrapper>
  )
}

export default Works