export interface Paper {
  id: number
  title: string
  abstract: string
  url: string
}

export const papers: Paper[] = [
  {
    id: 1,
    title: 'Inference-Time Temporal Probability Smoothing for Stable Video Segmentation with SAM2 under Weak Prompts',
    abstract:
      'Interactive video segmentation models such as SAM2 have demonstrated strong generalization across diverse visual domains. However, under weak user supervision — for example, when sparse point prompts are provided on a single frame — their predictions often suffer from temporal instability, including flickering boundaries, object dropout, and inconsistent object extents across frames. These issues limit their reliability in downstream video understanding and control applications. In this paper, we propose an inference-time temporal probability smoothing method that improves the temporal stability of SAM2-based video segmentation without retraining or architectural modification. Our approach operates directly on per-frame segmentation probability maps and leverages optical-flow-based motion warping together with pixel-wise uncertainty estimates derived from segmentation entropy and forward-backwards flow consistency.',
    url: 'https://drive.google.com/file/d/1oHnA-2nhBlk7UiV99qGNmKQLf2lyrByA/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Prompt Sensitivity in Vision-Language Grounding: How Small Changes in Wording Affect Object Detection',
    abstract:
      'Vision-language models have enabled open-vocabulary object grounding, allowing natural language queries to localize objects in images without task-specific retraining. A commonly assumed property of such systems is prompt invariance: semantically equivalent language descriptions are expected to yield consistent grounded predictions. We examine this assumption empirically. Using a controlled grounding pipeline that combines a fixed object detector with a language-conditioned similarity model, we study how small variations in prompt wording affect grounding behavior. Across a curated subset of the COCO dataset, we observe that semantically overlapping prompts frequently lead to different grounding outcomes, even when prominent target objects are present.',
    url: 'https://drive.google.com/file/d/1Go8kLjLv0CDl8s66SLvsJw9N-hrsS5Qz/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Geometric Limits of Knowledge Distillation: A Minimum-Width Theorem via Superposition Theory',
    abstract:
      'Knowledge distillation compresses large teacher models into smaller students, but student performance saturates at a loss floor that persists across training methods, objectives, and hyperparameter choices. We show this floor is geometric in origin. Neural networks pack far more learned features into their hidden layers than they have dimensions, a phenomenon termed superposition. A student with hidden width dS can faithfully encode at most dS · g(α) of the teacher\'s features, where α is the feature sparsity and g(α) is a capacity function grounded in compressed sensing theory. Features exceeding this budget are unrecoverable at the bottleneck, yielding an importance-weighted loss floor over the dropped features.',
    url: 'http://arxiv.org/abs/2604.04037',
  },
]
