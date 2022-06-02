import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'
import Image from 'next/image';
import { SiBootstrap, SiDjango, SiHeroku } from 'react-icons/si'

const Works = () => {
  return (
    <TileWrapper numOfPages={12}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile 
                page={0} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                        <div className="-mx-8 overflow-hidden">

                            <div className="my-8 px-8 w-full overflow-hidden">
                                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="https://mysarisari.herokuapp.com/">sari sari ✨</WorkLink>
                                </div>
                                <div>my first website & blog</div>
                            </div>

                            <div className="my-8 px-8 w-full overflow-hidden ">
                                <div className="flex flex-row space-x-4">
                                    <div><SiDjango /></div>
                                    <div><SiBootstrap /></div>
                                    <div><SiHeroku /></div>
                                </div>
                            </div>

                        </div>
                            
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
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="https://sari-sari.vercel.app/">sari sari v2 💎</WorkLink>
                            </div>
                            <div>(now with dark mode!)</div>

                            <div className="flex flex-row space-x-4">
                                    <div><SiDjango /></div>
                                    <div><SiBootstrap /></div>
                                    <div><SiHeroku /></div>
                                </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/sari-sari-v2.webp" 
                                layout="fill"
                                alt="sari sari v2"
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
                            <div>I developed</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="https://plume.ap-southeast-2.elasticbeanstalk.com/">Plume</WorkLink> 🦜
                            </div>
                            <div>an online multi-community</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/plume.webp" 
                                layout="fill"
                                alt="Plume"
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
                page={3} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I tried my hand at</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">Gaea 🍃</WorkLink>
                            </div>
                            <div>my first e-commerce website</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/gaea.webp" 
                                layout="fill"
                                alt="Gaea"
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
                page={4} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I started</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="https://sonderfy.netlify.app/">Sonder 📍</WorkLink>
                            </div>
                            <div>a local attraction finder</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/sonder.webp" 
                                layout="fill"
                                alt="Sonder"
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
                page={5} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I programmed</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">Cryptohub 🪙</WorkLink>
                            </div>
                            <div>a home for all crypto info</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/cryptohub.webp" 
                                layout="fill"
                                alt="Cryptohub"
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
                page={6} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I began</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">Acres 🏡</WorkLink>
                            </div>
                            <div>a UAE real estate web app</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/acres.webp" 
                                layout="fill"
                                alt="Acres"
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
                page={7} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I coded</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">NFTinity ♾️</WorkLink>
                            </div>
                            <div>an NFT marketplace mobile app</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/nftinity.webp" 
                                layout="fill"
                                alt="NFTinity"
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
                page={8} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I created</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">Sift 🔍</WorkLink>
                            </div>
                            <div>a Google search clone!</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/sift.webp" 
                                layout="fill"
                                alt="Sift"
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
                page={9} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I brought forth</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">QKC 🛍️</WorkLink>
                            </div>
                            <div>my very own apparel e-store</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/qkc.webp" 
                                layout="fill"
                                alt="QKC"
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
                page={10} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I crafted</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">AJL v1</WorkLink>
                            </div>
                            <div>my first personal web portfolio</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/ajlv1.webp" 
                                layout="fill"
                                alt="AJL v1"
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
                page={11} 
                renderContent={({ progress }) => (
                    <WorkContainer progress={0}>
                        <WorkLeft progress={progress}>
                            <div>I improved</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="">AJL into v2</WorkLink>
                            </div>
                            <div>a redesign of my first portfolio</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                                src="/assets/works/ajlv2.webp" 
                                layout="fill"
                                alt=""
                                objectFit='contain' 
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            >
            </Tile>
        </TileContent>
    </TileWrapper>
  )
}

export default Works