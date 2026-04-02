export interface Paper {
  id: number
  title: string
  abstract: string
}

export const papers: Paper[] = [
  {
    id: 1,
    title: 'Inference-Time Temporal Probability Smoothing for Stable Video Segmentation with SAM2 under Weak Prompts',
    abstract:
      'Interactive video segmentation models such as SAM2 have demonstrated strong generalization across diverse visual domains. However, under weak user supervision - for example, when sparse point prompts are provided on a single frame - their predictions often suffer from temporal instability, including flickering boundaries, object dropout, and inconsistent object extents across frames. These issues limit their reliability in downstream video understanding and control applications.',
  },
  {
    id: 2,
    title: 'Prompt Sensitivity in Vision-Language Grounding: How Small Changes in Wording Affect Object Detection',
    abstract:
      'Vision-language models have enabled open-vocabulary object grounding, allowing natural language queries to localize objects in images without task-specific retraining. A commonly assumed property of such systems is prompt invariance: semantically equivalent language descriptions are expected to yield consistent grounded predictions. We examine this assumption empirically. Using a controlled grounding pipeline that combines a fixed object detector with a language-conditioned similarity model, we study how small variations in prompt wording affect grounding behavior.',
  },
  {
    id: 3,
    title: 'Geometric Limits of Knowledge Distillation: A Minimum-Width Theorem via Superposition Theory',
    abstract:
      'Knowledge distillation compresses large teacher models into smaller students, but student performance saturates at a loss floor that persists across training methods, objectives, and hyperparameter choices. We show this floor is geometric in origin. Neural networks pack far more learned features into their hidden layers than they have dimensions, a phenomenon termed superposition. A student with hidden width dS can faithfully encode at most dS times g(alpha) of the teacher\'s features.',
  },
]
