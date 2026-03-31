export interface EmotionNode {
  id: string;
  labelKey: string;
  color?: string;
  children?: EmotionNode[];
  reflectionMode?: 'problem' | 'savor';
}

export const emotionTree: EmotionNode[] = [
  {
    id: "happy",
    labelKey: "emotions.happy",
    color: "#FFD700", // Gold/Yellow
    children: [
      {
        id: "playful",
        labelKey: "emotions.playful",
        children: [
          { id: "aroused", labelKey: "emotions.aroused", reflectionMode: 'savor' },
          { id: "cheeky", labelKey: "emotions.cheeky", reflectionMode: 'savor' },
        ],
      },
      {
        id: "content",
        labelKey: "emotions.content",
        children: [
          { id: "free", labelKey: "emotions.free", reflectionMode: 'savor' },
          { id: "joyful", labelKey: "emotions.joyful", reflectionMode: 'savor' },
        ],
      },
      {
        id: "interested",
        labelKey: "emotions.interested",
        children: [
          { id: "curious", labelKey: "emotions.curious", reflectionMode: 'savor' },
          { id: "inquisitive", labelKey: "emotions.inquisitive", reflectionMode: 'savor' },
        ],
      },
      {
        id: "proud",
        labelKey: "emotions.proud",
        children: [
          { id: "successful", labelKey: "emotions.successful", reflectionMode: 'savor' },
          { id: "confident", labelKey: "emotions.confident", reflectionMode: 'savor' },
        ],
      },
      {
        id: "accepted",
        labelKey: "emotions.accepted",
        children: [
          { id: "respected", labelKey: "emotions.respected", reflectionMode: 'savor' },
          { id: "valued", labelKey: "emotions.valued", reflectionMode: 'savor' },
        ],
      },
      {
        id: "powerful",
        labelKey: "emotions.powerful",
        children: [
          { id: "courageous", labelKey: "emotions.courageous", reflectionMode: 'savor' },
          { id: "creative", labelKey: "emotions.creative", reflectionMode: 'savor' },
        ],
      },
      {
        id: "peaceful",
        labelKey: "emotions.peaceful",
        children: [
          { id: "loving", labelKey: "emotions.loving", reflectionMode: 'savor' },
          { id: "thankful", labelKey: "emotions.thankful", reflectionMode: 'savor' },
        ],
      },
      {
        id: "trusting",
        labelKey: "emotions.trusting",
        children: [
          { id: "sensitive", labelKey: "emotions.sensitive", reflectionMode: 'savor' },
          { id: "intimate", labelKey: "emotions.intimate", reflectionMode: 'savor' },
        ],
      },
      {
        id: "optimistic",
        labelKey: "emotions.optimistic",
        children: [
          { id: "hopeful", labelKey: "emotions.hopeful", reflectionMode: 'savor' },
          { id: "inspired", labelKey: "emotions.inspired", reflectionMode: 'savor' },
        ],
      },
    ],
  },
  {
    id: "surprised",
    labelKey: "emotions.surprised",
    color: "#B19CD9", // Purple
    children: [
      {
        id: "startled",
        labelKey: "emotions.startled",
        children: [
          { id: "shocked", labelKey: "emotions.shocked", reflectionMode: 'problem' },
          { id: "dismayed", labelKey: "emotions.dismayed", reflectionMode: 'problem' },
        ],
      },
      {
        id: "confused",
        labelKey: "emotions.confused",
        children: [
          { id: "disillusioned", labelKey: "emotions.disillusioned", reflectionMode: 'problem' },
          { id: "perplexed", labelKey: "emotions.perplexed", reflectionMode: 'problem' },
        ],
      },
      {
        id: "amazed",
        labelKey: "emotions.amazed",
        children: [
          { id: "astonished", labelKey: "emotions.astonished", reflectionMode: 'savor' },
          { id: "awe", labelKey: "emotions.awe", reflectionMode: 'savor' },
        ],
      },
      {
        id: "excited",
        labelKey: "emotions.excited",
        children: [
          { id: "eager", labelKey: "emotions.eager", reflectionMode: 'savor' },
          { id: "energetic", labelKey: "emotions.energetic", reflectionMode: 'savor' },
        ],
      },
    ],
  },
  {
    id: "bad",
    labelKey: "emotions.bad",
    color: "#90EE90", // Light Green
    children: [
      {
        id: "bored",
        labelKey: "emotions.bored",
        children: [
          { id: "indifferent", labelKey: "emotions.indifferent", reflectionMode: 'problem' },
          { id: "apathetic", labelKey: "emotions.apathetic", reflectionMode: 'problem' },
        ],
      },
      {
        id: "busy",
        labelKey: "emotions.busy",
        children: [
          { id: "pressured", labelKey: "emotions.pressured", reflectionMode: 'problem' },
          { id: "rushed", labelKey: "emotions.rushed", reflectionMode: 'problem' },
        ],
      },
      {
        id: "stressed",
        labelKey: "emotions.stressed",
        children: [
          { id: "overwhelmed", labelKey: "emotions.overwhelmed", reflectionMode: 'problem' },
          { id: "out-of-control", labelKey: "emotions.out-of-control", reflectionMode: 'problem' },
        ],
      },
      {
        id: "tired",
        labelKey: "emotions.tired",
        children: [
          { id: "sleepy", labelKey: "emotions.sleepy", reflectionMode: 'problem' },
          { id: "unfocussed", labelKey: "emotions.unfocussed", reflectionMode: 'problem' },
        ],
      },
    ],
  },
  {
    id: "fearful",
    labelKey: "emotions.fearful",
    color: "#FFFACD", // Yellow
    children: [
      {
        id: "scared",
        labelKey: "emotions.scared",
        children: [
          { id: "helpless", labelKey: "emotions.helpless", reflectionMode: 'problem' },
          { id: "frightened", labelKey: "emotions.frightened", reflectionMode: 'problem' },
        ],
      },
      {
        id: "anxious",
        labelKey: "emotions.anxious",
        children: [
          { id: "overwhelmed_fear", labelKey: "emotions.overwhelmed_fear", reflectionMode: 'problem' },
          { id: "worried", labelKey: "emotions.worried", reflectionMode: 'problem' },
        ],
      },
      {
        id: "insecure",
        labelKey: "emotions.insecure",
        children: [
          { id: "inadequate", labelKey: "emotions.inadequate", reflectionMode: 'problem' },
          { id: "inferior", labelKey: "emotions.inferior", reflectionMode: 'problem' },
        ],
      },
      {
        id: "weak",
        labelKey: "emotions.weak",
        children: [
          { id: "worthless", labelKey: "emotions.worthless", reflectionMode: 'problem' },
          { id: "insignificant", labelKey: "emotions.insignificant", reflectionMode: 'problem' },
        ],
      },
      {
        id: "rejected",
        labelKey: "emotions.rejected",
        children: [
          { id: "excluded", labelKey: "emotions.excluded", reflectionMode: 'problem' },
          { id: "persecuted", labelKey: "emotions.persecuted", reflectionMode: 'problem' },
        ],
      },
      {
        id: "threatened",
        labelKey: "emotions.threatened",
        children: [
          { id: "nervous", labelKey: "emotions.nervous", reflectionMode: 'problem' },
          { id: "exposed", labelKey: "emotions.exposed", reflectionMode: 'problem' },
        ],
      },
    ],
  },
  {
    id: "angry",
    labelKey: "emotions.angry",
    color: "#FFB6C1", // Light Red/Pink
    children: [
      {
        id: "let_down",
        labelKey: "emotions.let_down",
        children: [
          { id: "betrayed", labelKey: "emotions.betrayed", reflectionMode: 'problem' },
          { id: "resentful", labelKey: "emotions.resentful", reflectionMode: 'problem' },
        ],
      },
      {
        id: "humiliated",
        labelKey: "emotions.humiliated",
        children: [
          { id: "disrespected", labelKey: "emotions.disrespected", reflectionMode: 'problem' },
          { id: "ridiculed", labelKey: "emotions.ridiculed", reflectionMode: 'problem' },
        ],
      },
      {
        id: "bitter",
        labelKey: "emotions.bitter",
        children: [
          { id: "indignant", labelKey: "emotions.indignant", reflectionMode: 'problem' },
          { id: "violated", labelKey: "emotions.violated", reflectionMode: 'problem' },
        ],
      },
      {
        id: "mad",
        labelKey: "emotions.mad",
        children: [
          { id: "furious", labelKey: "emotions.furious", reflectionMode: 'problem' },
          { id: "jealous", labelKey: "emotions.jealous", reflectionMode: 'problem' },
        ],
      },
      {
        id: "aggressive",
        labelKey: "emotions.aggressive",
        children: [
          { id: "provoked", labelKey: "emotions.provoked", reflectionMode: 'problem' },
          { id: "hostile", labelKey: "emotions.hostile", reflectionMode: 'problem' },
        ],
      },
      {
        id: "frustrated",
        labelKey: "emotions.frustrated",
        children: [
          { id: "infuriated", labelKey: "emotions.infuriated", reflectionMode: 'problem' },
          { id: "annoyed", labelKey: "emotions.annoyed", reflectionMode: 'problem' },
        ],
      },
      {
        id: "distant",
        labelKey: "emotions.distant",
        children: [
          { id: "withdrawn", labelKey: "emotions.withdrawn", reflectionMode: 'problem' },
          { id: "numb", labelKey: "emotions.numb", reflectionMode: 'problem' },
        ],
      },
      {
        id: "critical",
        labelKey: "emotions.critical",
        children: [
          { id: "skeptical", labelKey: "emotions.skeptical", reflectionMode: 'problem' },
          { id: "dismissive", labelKey: "emotions.dismissive", reflectionMode: 'problem' },
        ],
      },
    ],
  },
  {
    id: "disgusted",
    labelKey: "emotions.disgusted",
    color: "#D3D3D3", // Grey
    children: [
      {
        id: "disapproving",
        labelKey: "emotions.disapproving",
        children: [
          { id: "judgmental", labelKey: "emotions.judgmental", reflectionMode: 'problem' },
          { id: "embarrassed", labelKey: "emotions.embarrassed", reflectionMode: 'problem' },
        ],
      },
      {
        id: "disappointed",
        labelKey: "emotions.disappointed",
        children: [
          { id: "appalled", labelKey: "emotions.appalled", reflectionMode: 'problem' },
          { id: "revolted", labelKey: "emotions.revolted", reflectionMode: 'problem' },
        ],
      },
      {
        id: "awful",
        labelKey: "emotions.awful",
        children: [
          { id: "nauseated", labelKey: "emotions.nauseated", reflectionMode: 'problem' },
          { id: "detestable", labelKey: "emotions.detestable", reflectionMode: 'problem' },
        ],
      },
      {
        id: "repelled",
        labelKey: "emotions.repelled",
        children: [
          { id: "horrified", labelKey: "emotions.horrified", reflectionMode: 'problem' },
          { id: "hesitant", labelKey: "emotions.hesitant", reflectionMode: 'problem' },
        ],
      },
    ],
  },
  {
    id: "sad",
    labelKey: "emotions.sad",
    color: "#ADD8E6", // Light Blue
    children: [
      {
        id: "hurt",
        labelKey: "emotions.hurt",
        children: [
          { id: "embarrassed_sad", labelKey: "emotions.embarrassed_sad", reflectionMode: 'problem' },
          { id: "disappointed_sad", labelKey: "emotions.disappointed_sad", reflectionMode: 'problem' },
        ],
      },
      {
        id: "depressed",
        labelKey: "emotions.depressed",
        children: [
          { id: "inferior_sad", labelKey: "emotions.inferior_sad", reflectionMode: 'problem' },
          { id: "empty", labelKey: "emotions.empty", reflectionMode: 'problem' },
        ],
      },
      {
        id: "guilty",
        labelKey: "emotions.guilty",
        children: [
          { id: "remorseful", labelKey: "emotions.remorseful", reflectionMode: 'problem' },
          { id: "ashamed", labelKey: "emotions.ashamed", reflectionMode: 'problem' },
        ],
      },
      {
        id: "despair",
        labelKey: "emotions.despair",
        children: [
          { id: "powerless", labelKey: "emotions.powerless", reflectionMode: 'problem' },
          { id: "grief", labelKey: "emotions.grief", reflectionMode: 'problem' },
        ],
      },
      {
        id: "vulnerable",
        labelKey: "emotions.vulnerable",
        children: [
          { id: "fragile", labelKey: "emotions.fragile", reflectionMode: 'problem' },
          { id: "victimised", labelKey: "emotions.victimised", reflectionMode: 'problem' },
        ],
      },
      {
        id: "lonely",
        labelKey: "emotions.lonely",
        children: [
          { id: "abandoned", labelKey: "emotions.abandoned", reflectionMode: 'problem' },
          { id: "isolated", labelKey: "emotions.isolated", reflectionMode: 'problem' },
        ],
      },
    ],
  },
];
