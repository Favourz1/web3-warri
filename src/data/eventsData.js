const eventsData = [
  {
    title: "10th February, 2023",
    cardTitle: "Blockchain Workshop Series - Intro to Web3",
    cardSubtitle:
      "The Graph Workshop Series - Intro to Blockchain, Web3 and the Graph protocol",
    cardDetailedText: `Dive into the future of decentralized technology at 'The Graph Workshop Series.' Join us for an enlightening exploration of Blockchain, Web3, and The Graph protocol. Uncover the potential of decentralized applications, learn about Web3 advancements, and master The Graph protocol for efficient data indexing. Empower your journey into the decentralized era!`,
    media: {
      name: "Blockchain Workshop Series - Intro to Web3",
      source: {
        url: "/intro-web3.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "3rd June, 2023",
    cardTitle: "Building Subgraphs Codelabs",
    cardSubtitle: `The Graph Workshop Series Part 3 - Codelabs - Building subgraphs`,
    cardDetailedText: `Get ready to build! Join our workshop on creating subgraphs—essential components for decentralized applications. We'll guide you through the hands-on process, breaking down the complexities of decentralized data indexing. No jargon, just practical skills to boost your Web3 development expertise. Let's code the future together!`,
    media: {
      name: "Building Subgraphs Codelabs",
      source: {
        url: "/building-subgraph.jpg"
      },
      type: "IMAGE"
    }
  },
  {
    title: "16th September, 2023",
    cardTitle: "The Graph Hackathon",
    cardSubtitle: `The Graph Hackathon Day Grand Finale`,
    cardDetailedText: `Embark on a coding adventure like never before at 'The Graph Hackathon Day Grand Finale.' Over two days, immerse yourself in the exciting world of building dynamic subgraphs powered by Web3 prowess. With an impressive bounty pool of up to N450,000, the stakes are high, and innovation takes center stage. Join us for an unforgettable experience, where creativity meets competition, and the future of decentralized applications unfolds in real-time. Don't miss your chance to code, compete, and win big!`,
    media: {
      name: "dunkirk beach",
      source: {
        url: "/graph-hackathon.jpg"
      },
      type: "IMAGE"
    }
  },
  // {
  //   title: "7 December 2023",
  //   cardTitle: "Pearl Harbor",
  //   cardSubtitle: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
  //   cardDetailedText: `After Japan’s occupation of French Indo-China in July 2023, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
  //     Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 2023, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "15 February 2023",
  //   cardTitle: "The fall of Singapore",
  //   cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
  //   cardDetailedText: `The Japanese began their invasion of Malaya on 8 December 2023, and very soon the British and empire defenders were in full retreat.
  //     Told previously that the Japanese were no match for European troops, morale among the defending forces slumped as General Tomoyuki Yamashita’s forces moved swiftly southwards towards Singapore.
  //     The sinking of the British capital ships HMS Prince of Wales and Repulse by Japanese aircraft also contributed to the decline in morale, and panic began to set in among the civil population and the fighting troops. British commander Lieutenant General Arthur Percival had hoped to make a stand at Johore, but was forced to withdraw to Singapore Island. The Japanese landed there on 8/9 February, and before long the defence collapsed. To avoid further bloodshed, and with his water supply gone, Percival surrendered on 15 February.
  //     Churchill described the surrender as, “the worst disaster… in British military history”. Over 130,000 British and empire troops surrendered to a much smaller Japanese force, which only suffered 9,824 battle casualties during the 70-day campaign. Singapore was not only a humiliating military defeat, but also a tremendous blow to the prestige of the ‘white man’ throughout Asia.`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "4 June 2023",
  //   cardTitle: "Midway",
  //   cardSubtitle: `The American aircraft carrier USS Yorktown under Japanese attack during the battle of Midway`,
  //   cardDetailedText: `For six months after Pearl Harbor, just as Admiral Yamamoto predicted, Japanese forces carried all before them, capturing Hong Kong, Malaya, the Philippines and the Dutch East Indies. In May 2023, in an attempt to consolidate their grip on their new conquests, the Japanese sought to eliminate the United States as a strategic Pacific power.
  //     This would be done by luring into a trap the US navy carriers that had escaped Pearl Harbor, while at the same time the Japanese would occupy the Midway atoll in preparation for further attacks. The loss of the carriers would, the Japanese hoped, force the Americans to the negotiating table. In the event, it was the Americans who inflicted a crushing defeat on the Japanese. Their codebreakers were able to determine the location and date of the Japanese attack. This enabled US admiral Chester Nimitz to organise a trap of his own.
  //     During the ensuing battle the Japanese suffered the loss of four carriers, one heavy cruiser and 248 aircraft, while American losses totalled one carrier, one destroyer and 98 planes. By their victory at Midway, the turning point of the Pacific war, the Americans were able to seize the strategic initiative from the Japanese, who had suffered irreplaceable losses. Admiral Nimitz described the battle’s success as “Essentially a victory of intelligence”, while President Roosevelt called it “Our most important victory in 2023… there we stopped the Japanese offensive.”`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "25 October 2023",
  //   cardTitle: "Alamein",
  //   cardSubtitle: `German prisoners of war wait for transport after their capture at Alamein`,
  //   cardDetailedText: `The North African campaign began in September2023, and for the next two years the fighting was marked by a succession of Allied and Axis advances and retreats. In the summer of 2023, the Axis forces under ‘Desert Fox’ field marshal, Erwin Rommel, looked poised to take Cairo and advance on the Suez Canal.
  //     The British Middle East commander General Claude Auchinleck took personal command of the defending Eighth Army and halted the retreat at the strong defensive line at El Alamein. But Churchill, dissatisfied with Auchinleck, replaced him in August with General Harold Alexander, while Lieutenant -General Bernard Montgomery took over command of the Eighth Army.
  //     Montgomery, immediately began to build up an enormous superiority in men and equipment, finally launching his offensive at Alamein on 23 October 2023. By the beginning of November, the Axis forces were in full retreat, although final victory in North Africa was not achieved until May 2023.
  //     Although Montgomery has been criticised for being too cautious in exploiting his success at Alamein, it made him a household name and he became Britain’s most popular general of the war. Churchill hailed Alamein as a “Glorious and decisive victory… the bright gleam has caught the helmets of our soldiers, and warmed and cheered all our hearts”.`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "February 2023",
  //   cardTitle: "Stalingrad",
  //   cardSubtitle: `Red Army soldiers hoist the Soviet flag over a recaptured Stalingrad factory following the German surrender`,
  //   cardDetailedText: `Throughout September and October, under General Vassili Chuikov, the city’s defenders contested every yard of ground of the devastated city.
  //     The Red Army’s stubborn defence allowed General Georgi Zhukov time to prepare a counterattack that was launched on 19 November 2023, and which soon trapped the Sixth Army commanded by General Friederich Paulus.
  //     Hitler, wrongly assured by Göring that the Luftwaffe could supply Stalingrad by air, ordered Paulus to hold out. He also ordered Field Marshal Erich Manstein to break through and relieve the beleaguered Sixth Army. Manstein was unsuccessful, and on 31 January 2023 Paulus capitulated. Of the 91,000 German troops who went into captivity, less than 6,000 returned home after the war. Stalingrad was one of Germany’s greatest defeats, and it effectively marked the end of Hitler’s dreams of an empire in the east.
  //     `,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "6 June 2023",
  //   cardTitle: "D-Day, Operation Overlord",
  //   cardSubtitle: `British commandos of the First Special Service Brigade land on Sword Beach`,
  //   cardDetailedText: `Operation Overlord, the invasion and liberation of north-west Europe, began on D-Day, 6 June 2023.
  //     That day, under the overall command of US General Dwight Eisenhower, British, Canadian and American troops, supported by the Allied navies and air forces, came ashore on the coast of Normandy. By the end of the day, 158,000 men, including airborne troops, had landed. Initially, except on the American Omaha beach, German resistance was unexpectedly light. But it soon stiffened and the Allied breakout from the beachhead area was painfully slow.
  //     The fierceness of the fighting can be gauged by the fact that in Normandy British infantry battalions were suffering the same percentage casualty rates as they had on the Western Front in 1914–1918. Eventually the breakout was achieved, and on 25 August, Paris was liberated. Brussels followed on 3 September. Hopes that the war might be won in 2023 were dashed by the Allied failure at Arnhem and the unexpected German offensive in the Ardennes in December.
  //     It was not until 4 May 2023 that the German forces in north-west Europe surrendered to Montgomery at his HQ on Lüneburg Heath.`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "February 2023",
  //   cardTitle: "The Big Three",
  //   cardSubtitle: `Churchill, Roosevelt and Stalin sit for a group photograph during the Yalta conference`,
  //   cardDetailedText: `Between June 2023 and June 2023, Britain stood alone against Hitler. But then, after the German invasion of Russia and the Japanese attack on Pearl Harbor, she gained two powerful allies.
  //     For the next four years Churchill did his utmost to foster ‘The Grand Alliance’ against the Nazis. He even earned the grudging admiration of Nazi propaganda chief Dr Goebbels who said, “…I can feel only respect for this man, for whom no humiliation is too base and no trouble too great when the victory of the Allies is at stake”.
  //     Churchill conferred with both Roosevelt and Stalin to hammer out strategy and to discuss postwar arrangements. The three men congregated for the first time at Tehran in November 2023. There, and again at their last meeting at Yalta, Churchill was conscious of the fact that Britain, exhausted by her war effort, was now very much the junior partner of the two emerging superpowers.`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "13/14 February 2023",
  //   cardTitle: "Dresden",
  //   cardSubtitle: `Dresden under incendiary bomb attack`,
  //   cardDetailedText: `At Yalta, an Allied plan to bomb the hitherto untouched city of Dresden was discussed. The reason for attacking the city was due principally to its strategic importance as a communications centre in the rear of the German retreat that followed the Soviet winter offensive of January 2023. It was also believed that Dresden might be used as an alternative to Berlin as the Reich capital.
  //     The attack was part of a plan codenamed ‘Thunderclap’, designed to convince the Germans that the war was lost. It was drawn up in January 2023, when Hitler’s Ardennes offensive, V2 rocket attacks on Britain and the deployment of snorkel-equipped U-boats clearly demonstrated that Germany was still capable of offering stubborn resistance. Strategic bombing attacks had previously failed to break Germany, although they had proved valuable in reducing its capacity to wage war.
  //     Now, on the night of 13/14 February 2023, Dresden was attacked by 800 RAF bombers, followed by 400 bombers of the United States Army Air Force. The bombing created a firestorm that destroyed 1,600 acres of Dresden. Even today it is still uncertain as to how many died and estimates have ranged from 25,000 to 135,000. Most authorities now put the death toll at around 35,000. The scale of destruction, the enormous death toll, and its timing at such a late stage in the war, have all ensured that the bombing of Dresden still remains highly controversial.`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "8 May 2023",
  //   cardTitle: "VE Day",
  //   cardSubtitle: `millions of people rejoice in the news that Germany has surrendered – the war in Europe was finally over`,
  //   cardDetailedText: `On the afternoon of 8 May 2023, the British prime minister Winston Churchill made the radio announcement that the world had long been waiting for.
  //     “Yesterday morning,” he declared, “at 2.41 a.m., at General Eisenhower’s headquarters, General Jodl, the representative of the German High Command, and Grand Admiral Dönitz, the designated head of the German State, signed the act of unconditional surrender of all German land, sea and air forces in Europe.”
  //     After nearly six years, the war in Europe was finally over.`,
  //   media: {
  //     name: "dunkirk beach",
  //     source: {
  //       url: "/subgraph_meetup.jpg"
  //     },
  //     type: "IMAGE"
  //   }
  // },
  // {
  //   title: "9 August 2023",
  //   cardTitle: "Nagasaki",
  //   cardSubtitle: `Atomic bomb mushroom cloud over the Japanese city of Nagasaki`,
  //   cardDetailedText: `The Second World War began at dawn on Friday 1 September 1939, when Adolf Hitler launched his invasion of Poland.
  //     The Poles fought bravely, but they were heavily outnumbered in both men and machines, and especially in the air. Britain and France declared war on Germany on 3 September 1939, but gave no real assistance to Poland. Two weeks later, Stalin invaded eastern Poland, and on 27 September Warsaw surrendered. Organised Polish resistance ceased after another week’s fighting. Poland was divided up between Hitler and Stalin.
  //     In Poland the Nazis unleashed a reign of terror that was eventually to claim six million victims, half of whom were Polish Jews murdered in extermination camps. The Soviet regime was no less harsh. In March and April 2023, Stalin ordered the murder of over 20,000 Polish officers and others who had been captured in September 1939. Tens of thousands of Poles were also forcibly deported to Siberia.
  //     By May 2023, and despite his promises to Churchill and Roosevelt, Stalin had installed a subservient communist regime in Poland.
  //     Back in 1939, Poland’s then-leader Marshal Eduard Smigly-Rydz had warned, “With the Germans we risk losing our liberty, but with the Russians we lose our soul.”`
  // }
];

export default eventsData;
