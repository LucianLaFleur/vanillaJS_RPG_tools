// lists a single object with all 22 major arcanna and all minor arcanna.
// pattern [ upright || reversed ] + [ cardName ]

const tarotDeckInfo = {
//  0
    "upright The Fool": "The Fool represents new beginnings, spontaneity, and a carefree attitude. It encourages taking a leap of faith and embracing the unknown. Keywords: new beginnings, adventure, innocence, spontaneity.",
    "reversed The Fool": "The reversed Fool warns of reckless decisions or fear of the unknown. It signifies hesitation or irresponsibility that may lead to missed opportunities. Keywords: recklessness, fear, naivety, hesitation.",
// 1
    "upright The Magician": "The Magician signifies power, skill, and the ability to manifest goals through focus and determination. It highlights the alignment of thoughts, actions, and resources to create success. Keywords: manifestation, creativity, power, resourcefulness.",
    "reversed The Magician": "The reversed Magician warns of manipulation, illusion, or misuse of talents. It can point to missed opportunities due to lack of planning or deception. Keywords: manipulation, lack of focus, illusion, wasted potential.",
// 2
    "upright The High Priestess": "The High Priestess represents intuition, mystery, and the pursuit of hidden knowledge. She encourages trusting inner wisdom and embracing the unknown. Keywords: intuition, mystery, subconscious, spiritual insight.",
    "reversed The High Priestess": "A distrust of intuition and over-reliance on rationalization. Problems may occur from the lack of a positive and wise feminine influence, where irresponsibility may stand in its stead. Keywords: overly-logical, rejecting intuition, absence of tradition, avoidant of the emotional.",
// 3
    "upright The Empress": "The Empress embodies nurturing energy, abundance, and connection to nature and creativity. She symbolizes growth and the manifestation of love and prosperity. Keywords: nurturing, creativity, abundance, fertility.",
    "reversed The Empress": "The reversed Empress signals blocked creativity, overbearing tendencies, or neglect of self-care. It may indicate an imbalance in relationships or a lack of personal growth. Keywords: creative block, imbalance, neglect, overbearing.",
// 4
    "upright The Emperor": "The Emperor represents authority, structure, and the power of stability. He encourages discipline, responsibility, and taking control of one’s domain. Keywords: authority, structure, stability, discipline.",
    "reversed The Emperor": "The reversed Emperor warns of abuse of power, rigidity, or a lack of leadership. It may signify feeling overwhelmed by authority or struggling with control issues. Keywords: tyranny, rigidity, lack of control, imbalance of power.",
// 5
    "upright The Hierophant": "The Hierophant symbolizes tradition, spiritual wisdom, and conformity. It encourages seeking guidance from established institutions or trusted mentors. Keywords: tradition, spiritual guidance, conformity, education.",
    "reversed The Hierophant": "The reversed Hierophant suggests rebellion against tradition or feeling constrained by outdated beliefs. It calls for finding one’s own spiritual path. Keywords: rebellion, nonconformity, freedom, breaking tradition.",
// 6
    "upright The Lovers": "The Lovers signify harmony, deep relationships, and choices guided by love and alignment. They emphasize unity, mutual respect, and the balance between heart and mind. Keywords: harmony, relationships, choices, alignment.",
    "reversed The Lovers": "The reversed Lovers indicate disharmony, imbalance, or difficult decisions in relationships. It warns against making choices driven by impulse or fear. Keywords: imbalance, misalignment, conflict, poor choices.",
// 7
    "upright The Chariot": "The Chariot symbolizes willpower, determination, and victory through focus and control. It encourages overcoming obstacles and staying on course. Keywords: determination, victory, control, progress.",
    "reversed The Chariot": "The reversed Chariot warns of lack of direction, poor focus, or struggles with control. It may signify feeling stuck or overwhelmed. Keywords: lack of focus, misdirection, struggle, stagnation.",
// 8
    "upright Strength": "Strength represents inner courage, compassion, and the power of gentle influence. It encourages self-confidence and facing challenges with resilience. Keywords: courage, compassion, resilience, influence.",
    "reversed Strength": "The reversed Strength indicates self-doubt, lack of confidence, or an inability to manage emotions. It may warn against giving in to fear or aggression. Keywords: self-doubt, emotional imbalance, weakness, fear.",
// 9
    "upright The Hermit": "The Hermit signifies introspection, solitude, and the search for inner truth. It encourages retreating to gain clarity and spiritual insight. Keywords: introspection, solitude, wisdom, spiritual guidance.",
    "reversed The Hermit": "The reversed Hermit warns of excessive isolation, loneliness, or avoidance of self-reflection. It may indicate resisting necessary growth. Keywords: isolation, avoidance, stagnation, loneliness.",
// 10
    "upright Wheel of Fortune": "The Wheel of Fortune symbolizes cycles, luck, and destiny. It represents unexpected opportunities and the constant motion of life. Keywords: cycles, change, luck, destiny.",
    "reversed Wheel of Fortune": "The reversed Wheel of Fortune warns of misfortune, resistance to change, or feeling stuck in a negative cycle. It calls for breaking free of stagnation. Keywords: misfortune, resistance, stagnation, unpredictability.",
// 11 
    "upright Justice": "Justice represents fairness, truth, and accountability. It emphasizes clarity, making ethical decisions, and the law of cause and effect. Keywords: fairness, truth, accountability, balance.",
    "reversed Justice": "The reversed Justice warns of dishonesty, unfairness, or avoiding responsibility. It may signify unresolved issues or skewed perceptions. Keywords: dishonesty, imbalance, lack of accountability, deception.",
// 12
    "upright The Hanged Man": "The Hanged Man signifies surrender, letting go, and gaining new perspectives. It encourages patience and seeing situations from a different angle. Keywords: surrender, perspective, patience, letting go.",
    "reversed The Hanged Man": "The reversed Hanged Man indicates resistance to change, feeling stuck, or failing to see the bigger picture. It warns against clinging to outdated views. Keywords: resistance, stagnation, narrow-mindedness, impatience.",
// 13
    "upright Death": "Death signifies transformation, endings, and new beginnings. It represents letting go of the past to embrace growth and renewal. Keywords: transformation, endings, renewal, change.",
    "reversed Death": "The reversed Death warns of resistance to change or fear of endings. It may signify stagnation or clinging to what no longer serves. Keywords: fear, resistance, stagnation, avoidance of change.",
// 14
    "upright Temperance": "Temperance represents balance, moderation, and harmony. It encourages blending different elements to create unity and patience in life. Keywords: balance, harmony, patience, unity.",
    "reversed Temperance": "The reversed Temperance warns of excess, lack of balance, or impatience. It may signal a need to restore equilibrium. Keywords: excess, imbalance, discord, impatience.",
// 15
    "upright The Devil": "The Devil represents temptation, bondage, and materialism. It warns against losing freedom to negative patterns or attachments. Keywords: temptation, bondage, materialism, addiction.",
    "reversed The Devil": "The reversed Devil indicates breaking free from harmful habits or regaining control. It symbolizes liberation and self-awareness. Keywords: liberation, awareness, breaking free, empowerment.",
// 16
    "upright The Tower": "The Tower signifies sudden change, upheaval, and revelations. It represents the breaking down of false foundations for rebuilding stronger ones. Keywords: upheaval, revelation, change, transformation.",
    "reversed The Tower": "The reversed Tower warns of resistance to inevitable change or delaying necessary transformation. It may signify avoiding confrontation. Keywords: resistance, fear of change, avoidance, upheaval.",
// 17
    "upright The Star": "The Star represents hope, inspiration, and spiritual renewal. It encourages faith in the future and trusting the universe. Keywords: hope, inspiration, renewal, faith.",
    "reversed The Star": "The reversed Star indicates loss of faith, disconnection, or discouragement. It calls for reconnecting with one’s purpose. Keywords: discouragement, disconnection, hopelessness, loss of purpose.",
// 18
    "upright The Moon": "The Moon signifies intuition, illusion, and the subconscious. It encourages exploring hidden truths and embracing uncertainty. Keywords: intuition, illusion, subconscious, mystery.",
    "reversed The Moon": "The reversed Moon warns of confusion, fear, or being misled. It may signify clarity emerging from chaos. Keywords: confusion, fear, clarity, deception.",
// 19
    "upright The Sun": "The Sun represents success, joy, and vitality. It signifies clarity, positivity, and the achievement of goals. Keywords: success, joy, clarity, vitality.",
    "reversed The Sun": "The reversed Sun warns of temporary setbacks, unrealistic expectations, or lack of confidence. It calls for optimism and reassessment. Keywords: setbacks, pessimism, lack of clarity, doubt.",
// 20
    "upright Judgment": "Judgment signifies awakening, self-reflection, and taking responsibility for past actions. It encourages making life-changing decisions and embracing transformation. Keywords: awakening, reflection, responsibility, renewal.",
    "reversed Judgment": "The reversed Judgment warns of self-doubt, avoidance, or fear of change. It may signify hesitation to accept accountability. Keywords: avoidance, self-doubt, hesitation, fear of change.",
// 21
    "upright The World": "The World symbolizes completion, achievement, and fulfillment. It signifies the successful conclusion of a journey and the unity of all elements. Keywords: completion, achievement, fulfillment, unity.",
    "reversed The World": "The reversed World warns of unfinished business, delays, or lack of closure. It calls for addressing loose ends before moving forward. Keywords: unfinished business, delays, lack of closure, incompletion.",
// ------------------------------
    // --- Swords ------------------------------------------------------------
// ------------------------------
    "upright Ace of Swords": "The Ace of Swords represents clarity, breakthroughs, and the power of truth. It encourages decisive action and a fresh perspective to cut through confusion. Keywords: clarity, truth, breakthrough, decisiveness.",
    "reversed Ace of Swords": "The reversed Ace of Swords warns of confusion, misinformation, or clouded judgment. It may signify struggles to see the truth or make a clear decision. Keywords: confusion, misinformation, lack of clarity, indecision.",
  
    "upright 2 of Swords": "The 2 of Swords represents difficult decisions, balance, and the need for impartiality. It encourages pausing to weigh options and find clarity amidst conflict. Keywords: decisions, balance, impartiality, contemplation.",
    "reversed 2 of Swords": "The reversed 2 of Swords warns of avoidance, indecision, or an inability to face the truth. It suggests being stuck in a cycle of inaction or denial. Keywords: avoidance, indecision, denial, stalemate.",
  
    "upright 3 of Swords": "The 3 of Swords signifies heartbreak, sorrow, and emotional pain. It represents the process of healing through acknowledging and releasing grief. Keywords: heartbreak, sorrow, emotional pain, release.",
    "reversed 3 of Swords": "The reversed 3 of Swords signals recovery, forgiveness, and moving past pain. It suggests letting go of emotional wounds and embracing healing. Keywords: recovery, forgiveness, healing, letting go.",
  
    "upright 4 of Swords": "The 4 of Swords symbolizes rest, recovery, and taking time to regroup. It encourages stepping back to gain strength and clarity for future challenges. Keywords: rest, recovery, reflection, renewal.",
    "reversed 4 of Swords": "The reversed 4 of Swords warns of burnout, stress, or an inability to rest. It suggests the need to slow down and prioritize self-care. Keywords: burnout, stress, overexertion, neglect of self-care.",
  
    "upright 5 of Swords": "The 5 of Swords represents conflict, tension, and the cost of victory. It warns of hollow triumphs and the consequences of actions taken without consideration. Keywords: conflict, tension, hollow victory, consequences.",
    "reversed 5 of Swords": "The reversed 5 of Swords indicates resolution, forgiveness, or moving away from conflict. It suggests the opportunity to rebuild trust and mend relationships. Keywords: resolution, forgiveness, rebuilding, reconciliation.",
  
    "upright 6 of Swords": "The 6 of Swords signifies transition, moving forward, and finding peace after struggle. It represents leaving behind difficulties and heading toward calmer waters. Keywords: transition, peace, moving forward, recovery.",
    "reversed 6 of Swords": "The reversed 6 of Swords warns of resistance to change, inability to let go, or feeling stuck. It suggests struggling to move past difficulties or embrace new opportunities. Keywords: resistance, stagnation, clinging to the past, lack of progress.",
  
    "upright 7 of Swords": "The 7 of Swords symbolizes strategy, cunning, and sometimes deceit. It encourages clever thinking but warns against dishonesty or sneaky behavior. Keywords: strategy, cunning, deceit, resourcefulness.",
    "reversed 7 of Swords": "The reversed 7 of Swords signals exposure of deceit, guilt, or facing the consequences of dishonesty. It encourages owning up to mistakes and seeking redemption. Keywords: exposure, guilt, consequences, redemption.",

    "upright 8 of Swords": "The 8 of Swords represents feeling trapped, restricted, or powerless. It encourages recognizing self-imposed limitations and finding ways to regain freedom. Keywords: restriction, entrapment, helplessness, self-imposed barriers.",
    "reversed 8 of Swords": "The reversed 8 of Swords indicates liberation, clarity, and overcoming obstacles. It suggests breaking free from fear and regaining a sense of control. Keywords: liberation, clarity, overcoming, freedom.",
    
    "upright 9 of Swords": "The 9 of Swords signifies anxiety, fear, and sleepless nights. It warns of overthinking and encourages seeking support to address inner turmoil. Keywords: anxiety, fear, overthinking, worry.",
    "reversed 9 of Swords": "The reversed 9 of Swords suggests release from anxiety, letting go of fear, or addressing underlying issues. It signifies the beginning of healing and finding peace. Keywords: release, peace, healing, resolution.",
    
    "upright 10 of Swords": "The 10 of Swords represents painful endings, betrayal, or defeat. It emphasizes the importance of accepting finality and moving forward toward new beginnings. Keywords: endings, betrayal, defeat, closure.",
    "reversed 10 of Swords": "The reversed 10 of Swords indicates recovery, resilience, and the opportunity to rebuild after hardship. It signifies rising from a challenging experience. Keywords: recovery, resilience, rebuilding, healing.",
    
    "upright Page of Swords": "The Page of Swords symbolizes curiosity, new ideas, and eagerness to learn. It encourages exploring opportunities and gathering information with sharp focus. Keywords: curiosity, learning, ideas, exploration.",
    "reversed Page of Swords": "The reversed Page of Swords warns of misinformation, gossip, or immature communication. It suggests being cautious of impulsive actions or words. Keywords: misinformation, gossip, impulsiveness, immaturity.",
    
    "upright Knight of Swords": "The Knight of Swords represents ambition, drive, and swift action. It encourages pursuing goals with determination but warns against recklessness. Keywords: ambition, action, determination, speed.",
    "reversed Knight of Swords": "The reversed Knight of Swords signals impulsiveness, lack of direction, or acting without consideration. It warns of rushing into situations unprepared. Keywords: impulsiveness, recklessness, lack of direction, impatience.",
    
    "upright Queen of Swords": "The Queen of Swords embodies intellect, clarity, and strong communication. She encourages fairness, objectivity, and standing firm in truth. Keywords: intellect, clarity, communication, fairness.",
    "reversed Queen of Swords": "The reversed Queen of Swords warns of coldness, harshness, or overly critical behavior. It suggests balancing intellect with empathy. Keywords: coldness, harshness, criticism, imbalance.",
    
    "upright King of Swords": "The King of Swords represents authority, wisdom, and clear judgment. He encourages making decisions with logic, integrity, and strong leadership. Keywords: authority, wisdom, judgment, leadership.",
    "reversed King of Swords": "The reversed King of Swords signals misuse of power, manipulation, or lack of integrity. It warns against abusing authority or neglecting ethical responsibilities. Keywords: manipulation, abuse of power, dishonesty, lack of integrity.",
// ------------------------------
    // --- Cups ------------------------------------------------------------
// ------------------------------
    "upright Ace of Cups": "The Ace of Cups represents new emotional beginnings, love, and creativity. It encourages opening the heart to joy, compassion, and emotional fulfillment. Keywords: love, compassion, creativity, joy.",
    "reversed Ace of Cups": "The reversed Ace of Cups warns of blocked emotions, suppressed creativity, or difficulty expressing feelings. It suggests the need to reconnect with the heart. Keywords: emotional blockage, suppression, disconnection, creativity stifled.",
    
    "upright 2 of Cups": "The 2 of Cups symbolizes partnership, mutual respect, and emotional connection. It represents harmony and balance in relationships. Keywords: partnership, harmony, connection, balance.",
    "reversed 2 of Cups": "The reversed 2 of Cups warns of disharmony, imbalance, or conflict in relationships. It suggests the need to address misunderstandings or emotional distance. Keywords: disharmony, conflict, imbalance, disconnection.",
    
    "upright 3 of Cups": "The 3 of Cups signifies celebration, friendship, and community. It encourages enjoying the company of others and embracing shared joy. Keywords: celebration, friendship, community, joy.",
    "reversed 3 of Cups": "The reversed 3 of Cups warns of overindulgence, isolation, or strained friendships. It suggests the need for balance and addressing interpersonal challenges. Keywords: overindulgence, isolation, strain, imbalance.",
    
    "upright 4 of Cups": "The 4 of Cups represents introspection, contemplation, and apathy. It encourages seeking clarity and being open to opportunities that may be overlooked. Keywords: introspection, contemplation, apathy, missed opportunities.",
    "reversed 4 of Cups": "The reversed 4 of Cups signals renewed focus, motivation, or a willingness to embrace change. It suggests letting go of stagnation and seeing potential around you. Keywords: renewed focus, motivation, change, openness.",
    
    "upright 5 of Cups": "The 5 of Cups signifies loss, grief, and regret. It encourages processing emotions while also focusing on remaining opportunities or support. Keywords: loss, grief, regret, recovery.",
    "reversed 5 of Cups": "The reversed 5 of Cups indicates healing, forgiveness, and finding hope after hardship. It suggests moving forward and letting go of past pain. Keywords: healing, forgiveness, hope, release.",
    
    "upright 6 of Cups": "The 6 of Cups represents nostalgia, innocence, and joyful memories. It encourages reconnecting with positive experiences and embracing childlike wonder. Keywords: nostalgia, innocence, joy, memories.",
    "reversed 6 of Cups": "The reversed 6 of Cups warns against living in the past, unresolved issues, or being overly sentimental. It suggests finding balance between past and present. Keywords: past focus, unresolved issues, sentimentality, imbalance.",
    
    "upright 7 of Cups": "The 7 of Cups symbolizes choices, imagination, and potential. It encourages clarity in decision-making and discerning reality from illusion. Keywords: choices, imagination, potential, discernment.",
    "reversed 7 of Cups": "The reversed 7 of Cups warns of confusion, overwhelmed decision-making, or disillusionment. It suggests grounding oneself to make clear choices. Keywords: confusion, disillusionment, clarity, focus.",
    
    "upright 8 of Cups": "The 8 of Cups signifies walking away, seeking growth, and leaving behind what no longer serves. It encourages courage to pursue emotional or spiritual fulfillment. Keywords: departure, growth, seeking, courage.",
    "reversed 8 of Cups": "The reversed 8 of Cups warns of fear of change, stagnation, or difficulty letting go. It suggests examining what is holding you back. Keywords: stagnation, fear of change, attachment, reluctance.",
    
    "upright 9 of Cups": "The 9 of Cups represents emotional fulfillment, satisfaction, and gratitude. It signifies achieving personal goals and finding joy in accomplishments. Keywords: fulfillment, satisfaction, gratitude, achievement.",
    "reversed 9 of Cups": "The reversed 9 of Cups warns of complacency, unfulfilled desires, or superficial happiness. It encourages deeper reflection on what truly brings joy. Keywords: complacency, dissatisfaction, reflection, superficiality.",
    
    "upright 10 of Cups": "The 10 of Cups symbolizes harmony, family, and lasting happiness. It represents emotional contentment and a sense of unity. Keywords: harmony, family, happiness, unity.",
    "reversed 10 of Cups": "The reversed 10 of Cups warns of disconnection, strained relationships, or unrealistic expectations. It encourages addressing underlying emotional issues. Keywords: disconnection, strain, imbalance, expectations.",
    
    "upright Page of Cups": "The Page of Cups represents emotional openness, creativity, and youthful wonder. It encourages embracing imagination and new emotional experiences. Keywords: openness, creativity, imagination, wonder.",
    "reversed Page of Cups": "The reversed Page of Cups warns of emotional immaturity, creative blockages, or insecurity. It suggests working on self-expression and confidence. Keywords: immaturity, blockage, insecurity, self-expression.",
    
    "upright Knight of Cups": "The Knight of Cups symbolizes romance, charm, and pursuing dreams with passion. It encourages taking inspired action guided by intuition. Keywords: romance, passion, intuition, pursuit.",
    "reversed Knight of Cups": "The reversed Knight of Cups warns of unrealistic expectations, moodiness, or insincerity. It suggests grounding emotions and evaluating intentions. Keywords: insincerity, moodiness, unrealistic, grounding.",
    
    "upright Queen of Cups": "The Queen of Cups embodies compassion, intuition, and emotional intelligence. She encourages nurturing relationships and trusting inner wisdom. Keywords: compassion, intuition, nurturing, wisdom.",
    "reversed Queen of Cups": "The reversed Queen of Cups warns of emotional imbalance, over-sensitivity, or neglecting self-care. It suggests finding equilibrium and self-love. Keywords: imbalance, over-sensitivity, neglect, self-care.",
    
    "upright King of Cups": "The King of Cups represents emotional mastery, wisdom, and balance. He encourages leading with compassion and maintaining control in emotional situations. Keywords: mastery, wisdom, balance, leadership.",
    "reversed King of Cups": "The reversed King of Cups warns of emotional manipulation, detachment, or instability. It suggests addressing emotional challenges with honesty and care. Keywords: manipulation, detachment, instability, honesty.",

// ------------------------------
    // --- Wands ------------------------------------------------------------
// ------------------------------
    "upright Ace of Wands": "The Ace of Wands represents inspiration, new beginnings, and creative potential. It encourages pursuing passions and embracing opportunities for growth. Keywords: inspiration, creativity, potential, opportunity.",
    "reversed Ace of Wands": "The reversed Ace of Wands warns of delays, creative blocks, or missed opportunities. It suggests finding ways to reignite enthusiasm. Keywords: delays, blocks, missed opportunities, stagnation.",
    
    "upright 2 of Wands": "The 2 of Wands symbolizes planning, foresight, and decision-making for the future. It encourages stepping out of your comfort zone and exploring new horizons. Keywords: planning, foresight, decision-making, exploration.",
    "reversed 2 of Wands": "The reversed 2 of Wands warns of indecision, fear of change, or poor planning. It suggests finding clarity and courage to move forward. Keywords: indecision, fear, poor planning, hesitation.",
    
    "upright 3 of Wands": "The 3 of Wands signifies progress, expansion, and opportunities on the horizon. It represents taking steps toward long-term goals and embracing potential. Keywords: progress, expansion, opportunities, growth.",
    "reversed 3 of Wands": "The reversed 3 of Wands indicates setbacks, delays, or lack of direction. It suggests re-evaluating plans to overcome obstacles. Keywords: setbacks, delays, lack of direction, re-evaluation.",
    
    "upright 4 of Wands": "The 4 of Wands symbolizes celebration, stability, and a sense of community. It represents milestones and the joy of shared success. Keywords: celebration, stability, community, joy.",
    "reversed 4 of Wands": "The reversed 4 of Wands warns of instability, conflict, or unmet expectations. It suggests working to restore harmony and balance. Keywords: instability, conflict, imbalance, unmet expectations.",
    
    "upright 5 of Wands": "The 5 of Wands represents competition, conflict, and differing perspectives. It encourages healthy debate and finding ways to collaborate. Keywords: competition, conflict, perspectives, collaboration.",
    "reversed 5 of Wands": "The reversed 5 of Wands suggests resolution, harmony, or avoiding unnecessary conflict. It signifies finding common ground and compromise. Keywords: resolution, harmony, compromise, peace.",
    
    "upright 6 of Wands": "The 6 of Wands signifies victory, recognition, and success. It represents the rewards of hard work and leadership. Keywords: victory, recognition, success, leadership.",
    "reversed 6 of Wands": "The reversed 6 of Wands warns of self-doubt, lack of recognition, or overconfidence. It suggests focusing on authentic achievements rather than external validation. Keywords: self-doubt, lack of recognition, overconfidence, authenticity.",
    
    "upright 7 of Wands": "The 7 of Wands represents perseverance, defense, and standing your ground. It encourages courage and determination to overcome challenges. Keywords: perseverance, defense, courage, determination.",
    "reversed 7 of Wands": "The reversed 7 of Wands warns of feeling overwhelmed, lack of confidence, or defensiveness. It suggests re-evaluating priorities to regain balance. Keywords: overwhelm, defensiveness, re-evaluation, insecurity.",
    
    "upright 8 of Wands": "The 8 of Wands symbolizes swift movement, progress, and rapid developments. It encourages seizing opportunities and maintaining momentum. Keywords: speed, progress, momentum, opportunities.",
    "reversed 8 of Wands": "The reversed 8 of Wands indicates delays, miscommunication, or lack of progress. It suggests patience and recalibration of plans. Keywords: delays, miscommunication, stagnation, patience.",
    
    "upright 9 of Wands": "The 9 of Wands represents resilience, persistence, and standing firm despite challenges. It encourages drawing on inner strength to see things through. Keywords: resilience, persistence, strength, determination.",
    "reversed 9 of Wands": "The reversed 9 of Wands warns of burnout, hesitation, or feeling overwhelmed. It suggests taking time to recharge and strategize. Keywords: burnout, hesitation, overwhelm, recovery.",
    
    "upright 10 of Wands": "The 10 of Wands symbolizes burdens, hard work, and responsibility. It encourages prioritizing tasks and finding ways to lighten the load. Keywords: burdens, responsibility, hard work, prioritization.",
    "reversed 10 of Wands": "The reversed 10 of Wands indicates release, delegation, or avoiding unnecessary burdens. It signifies finding relief through sharing responsibilities. Keywords: release, delegation, relief, freedom.",
    
    "upright Page of Wands": "The Page of Wands represents enthusiasm, exploration, and creative potential. It encourages taking inspired steps toward new endeavors. Keywords: enthusiasm, exploration, creativity, potential.",
    "reversed Page of Wands": "The reversed Page of Wands warns of lack of direction, impatience, or creative blocks. It suggests focusing energy constructively. Keywords: lack of direction, impatience, blocks, focus.",
    
    "upright Knight of Wands": "The Knight of Wands symbolizes ambition, passion, and bold action. It encourages pursuing goals with energy and confidence. Keywords: ambition, passion, boldness, energy.",
    "reversed Knight of Wands": "The reversed Knight of Wands warns of impulsiveness, recklessness, or lack of follow-through. It suggests balancing enthusiasm with practicality. Keywords: impulsiveness, recklessness, imbalance, practicality.",
    
    "upright Queen of Wands": "The Queen of Wands embodies confidence, creativity, and independence. She encourages leadership and inspiring others through example. Keywords: confidence, creativity, independence, inspiration.",
    "reversed Queen of Wands": "The reversed Queen of Wands warns of jealousy, insecurity, or being overly controlling. It suggests finding balance and confidence within. Keywords: jealousy, insecurity, control, balance.",
    
    "upright King of Wands": "The King of Wands represents leadership, vision, and charisma. He encourages taking charge with confidence and inspiring others. Keywords: leadership, vision, charisma, confidence.",
    "reversed King of Wands": "The reversed King of Wands warns of arrogance, dominance, or lack of direction. It suggests reevaluating leadership style and goals. Keywords: arrogance, dominance, misdirection, reevaluation.",
      
// ------------------------------
    // --- pentacles ------------------------------------------------------------
// ------------------------------

    "upright Ace of Pentacles": "The Ace of Pentacles represents new financial opportunities, prosperity, and the potential for material success. It encourages laying strong foundations for long-term growth. Keywords: prosperity, opportunity, abundance, foundations.",
    "reversed Ace of Pentacles": "The reversed Ace of Pentacles warns of missed opportunities, financial instability, or poor planning. It suggests reassessing priorities and finding ways to regain stability. Keywords: instability, missed opportunities, poor planning, reassessment.",
    
    "upright 2 of Pentacles": "The 2 of Pentacles symbolizes balance, adaptability, and juggling multiple priorities. It encourages finding harmony amidst challenges and maintaining flexibility. Keywords: balance, adaptability, flexibility, multitasking.",
    "reversed 2 of Pentacles": "The reversed 2 of Pentacles warns of overwhelm, imbalance, or lack of time management. It suggests streamlining responsibilities to regain focus. Keywords: overwhelm, imbalance, poor management, disorganization.",
    
    "upright 3 of Pentacles": "The 3 of Pentacles represents collaboration, teamwork, and the importance of skilled effort. It encourages working with others to achieve shared goals. Keywords: collaboration, teamwork, effort, skill.",
    "reversed 3 of Pentacles": "The reversed 3 of Pentacles warns of poor teamwork, lack of cooperation, or low-quality work. It suggests improving communication and addressing conflicts. Keywords: poor teamwork, conflict, lack of effort, miscommunication.",
    
    "upright 4 of Pentacles": "The 4 of Pentacles symbolizes security, control, and financial stability. It encourages prudence and protecting what has been earned. Keywords: security, control, stability, prudence.",
    "reversed 4 of Pentacles": "The reversed 4 of Pentacles warns of greed, hoarding, or fear of loss. It suggests letting go of unhealthy attachments to material things. Keywords: greed, fear of loss, hoarding, letting go.",
    
    "upright 5 of Pentacles": "The 5 of Pentacles signifies financial hardship, loss, or feeling left out. It encourages seeking support and focusing on resilience in difficult times. Keywords: hardship, loss, isolation, resilience.",
    "reversed 5 of Pentacles": "The reversed 5 of Pentacles indicates recovery, hope, and improving circumstances. It suggests finding opportunities to rebuild and regain security. Keywords: recovery, hope, improvement, rebuilding.",
    
    "upright 6 of Pentacles": "The 6 of Pentacles represents generosity, giving, and balance in resources. It encourages sharing wealth and offering help to those in need. Keywords: generosity, balance, charity, giving.",
    "reversed 6 of Pentacles": "The reversed 6 of Pentacles warns of inequality, strings attached, or selfishness. It suggests ensuring fairness in exchanges and avoiding exploitation. Keywords: inequality, exploitation, imbalance, selfishness.",
    
    "upright 7 of Pentacles": "The 7 of Pentacles symbolizes patience, hard work, and assessing progress. It encourages reflection and planning for continued growth. Keywords: patience, progress, hard work, reflection.",
    "reversed 7 of Pentacles": "The reversed 7 of Pentacles warns of impatience, lack of results, or wasted effort. It suggests reevaluating methods and setting realistic expectations. Keywords: impatience, wasted effort, reevaluation, stagnation.",
    
    "upright 8 of Pentacles": "The 8 of Pentacles represents dedication, skill development, and mastery through hard work. It encourages focusing on self-improvement and craftsmanship. Keywords: dedication, mastery, skill, hard work.",
    "reversed 8 of Pentacles": "The reversed 8 of Pentacles warns of lack of focus, poor-quality work, or boredom. It suggests renewing passion or taking a break to refocus. Keywords: lack of focus, poor effort, boredom, refocus.",
    
    "upright 9 of Pentacles": "The 9 of Pentacles symbolizes independence, luxury, and self-sufficiency. It represents the rewards of hard work and enjoying personal success. Keywords: independence, luxury, success, self-sufficiency.",
    "reversed 9 of Pentacles": "The reversed 9 of Pentacles warns of overindulgence, financial instability, or lack of self-sufficiency. It suggests reevaluating priorities and long-term goals. Keywords: instability, overindulgence, dependence, reevaluation.",
    
    "upright 10 of Pentacles": "The 10 of Pentacles represents wealth, legacy, and long-term stability. It encourages building lasting foundations and appreciating family and tradition. Keywords: wealth, legacy, stability, tradition.",
    "reversed 10 of Pentacles": "The reversed 10 of Pentacles warns of financial loss, family conflict, or instability. It suggests addressing underlying issues and focusing on security. Keywords: loss, conflict, instability, insecurity.",
    
    "upright Page of Pentacles": "The Page of Pentacles symbolizes new opportunities, learning, and practical growth. It encourages exploring ideas and building skills for future success. Keywords: opportunities, learning, growth, practicality.",
    "reversed Page of Pentacles": "The reversed Page of Pentacles warns of procrastination, missed chances, or lack of commitment. It suggests refocusing on goals and taking action. Keywords: procrastination, missed chances, lack of focus, action.",
    
    "upright Knight of Pentacles": "The Knight of Pentacles represents diligence, responsibility, and steady progress. It encourages patience and persistence in achieving goals. Keywords: diligence, responsibility, patience, persistence.",
    "reversed Knight of Pentacles": "The reversed Knight of Pentacles warns of stagnation, laziness, or overworking. It suggests finding balance and reassessing priorities. Keywords: stagnation, laziness, overworking, imbalance.",
    
    "upright Queen of Pentacles": "The Queen of Pentacles embodies nurturing, practicality, and resourcefulness. She encourages caring for others while maintaining self-sufficiency. Keywords: nurturing, practicality, resourcefulness, self-sufficiency.",
    "reversed Queen of Pentacles": "The reversed Queen of Pentacles warns of neglect, materialism, or over-dependence. It suggests focusing on self-care and grounding. Keywords: neglect, materialism, dependence, grounding.",
    
    "upright King of Pentacles": "The King of Pentacles represents wealth, leadership, and financial stability. He encourages responsibility and generosity in managing resources. Keywords: wealth, leadership, stability, generosity.",
    "reversed King of Pentacles": "The reversed King of Pentacles warns of greed, mismanagement, or rigidity. It suggests reassessing priorities and avoiding over-control. Keywords: greed, mismanagement, rigidity, reassessment."

    
};
