import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work'
import Image from 'next/image';

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile 
                page={0} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">sari sari v1</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/sari-sari-v1.webp" 
                                layout="fill"
                                alt="sari sari"
                                objectFit='contain' 
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            >
                
            </Tile>
        </TileContent>
        <TileContent>
            <Tile 
                page={1} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I evolved</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">sari sari into v2</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/sari-sari-v2.webp" 
                                layout="fill"
                                alt="sari sari"
                                objectFit='contain' 
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            >
                
            </Tile>
        </TileContent>
        <TileContent>
            <Tile 
                page={2} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                        </WorkLeft>
                    </WorkContainer>
                )}
            >
                
            </Tile>
        </TileContent>
    </TileWrapper>
  )
}

export default Works