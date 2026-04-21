export interface Paper {
  id: number
  title: string
  abstract: string
  url: string
  type: 'paper' | 'project'
  tags?: string[]
  expandable?: boolean
  projectDetails?: {
    repo: string
    highlights: string[]
    techStack: string[]
  }
}

export const papers: Paper[] = [
  {
    id: 1,
    type: 'paper',
    title: 'Inference-Time Temporal Probability Smoothing for Stable Video Segmentation with SAM2 under Weak Prompts',
    abstract:
      'Interactive video segmentation models such as SAM2 have demonstrated strong generalization across diverse visual domains. However, under weak user supervision — for example, when sparse point prompts are provided on a single frame — their predictions often suffer from temporal instability, including flickering boundaries, object dropout, and inconsistent object extents across frames. These issues limit their reliability in downstream video understanding and control applications. In this paper, we propose an inference-time temporal probability smoothing method that improves the temporal stability of SAM2-based video segmentation without retraining or architectural modification.',
    url: 'https://arxiv.org/abs/2604.17115',
  },
  {
    id: 2,
    type: 'paper',
    title: 'Prompt Sensitivity in Vision-Language Grounding: How Small Changes in Wording Affect Object Detection',
    abstract:
      'Vision-language models have enabled open-vocabulary object grounding, allowing natural language queries to localize objects in images without task-specific retraining. A commonly assumed property of such systems is prompt invariance: semantically equivalent language descriptions are expected to yield consistent grounded predictions. We examine this assumption empirically. Using a controlled grounding pipeline that combines a fixed object detector with a language-conditioned similarity model, we study how small variations in prompt wording affect grounding behavior.',
    url: 'https://arxiv.org/abs/2604.17126',
  },
  {
    id: 3,
    type: 'paper',
    title: 'Smooth Transitions: How VAEs Keep the Latent Space Continuous and Complete',
    abstract:
      'Variational Auto Encoders (VAEs) self-learn the independent data-generative features of the world and preserve them in their latent space. When trained on facial images, VAEs can learn latent attributes such as hairstyle, emotions, presence of beard, and head pose without being explicitly told what those features are. This latent space where autoencoders preserve their learnings, in the case of standard autoencoders is discrete. This means that if we take two images and find their corresponding latent points, the space between those points is essentially meaningless to the autoencoder. VAEs solve this problem by making the latent space both continuous and complete. In this paper, we uncover the importance of maintaining continuity and completeness in the latent space using the specific example of facial generations. We quantify our results using reconstruction metrics (MSE, PSNR), latent space statistical properties (KL divergence, effective dimensionality, correlation), continuity measures (interpolation smoothness) and disentanglement score.',
    url: 'https://drive.google.com/file/d/1s2KVkvxbbzhXg-AKU_AZ1wIJ2jdpQdi4/view?usp=sharing',
  },
  {
    id: 4,
    type: 'paper',
    title: 'GFlowNet-Driven De Novo Generation of Antibacterial Candidates Targeting S. aureus',
    abstract:
      'Antimicrobial resistance (AMR) poses a critical global health threat, with methicillin-resistant Staphylococcus aureus (MRSA) among the most dangerous priority pathogens. Traditional drug discovery pipelines are slow, expensive, and yield limited chemical diversity, making them ill-suited for combating rapidly evolving resistance. We present a Generative Flow Network (GFlowNet) framework for de novo generation of antibacterial molecule candidates targeting S. aureus. Our approach employs a Graph Transformer architecture with Trajectory Balance training over a fragment-based molecular action space comprising 72 chemically meaningful building blocks. We design a multi-objective reward function that balances predicted antibacterial potency (pIC50), synthetic accessibility (SA), and drug-likeness (QED) through non-linear thresholding inspired by TacoGFN.',
    url: 'https://drive.google.com/file/d/1KQdkH2X0Ln8aXz5YyXGnohPqkO3Tm0hO/view?usp=sharing',
  },
  {
    id: 5,
    type: 'paper',
    title: 'Geometric Limits of Knowledge Distillation: A Minimum-Width Theorem via Superposition Theory',
    abstract:
      'Knowledge distillation compresses large teacher models into smaller students, but student performance saturates at a loss floor that persists across training methods, objectives, and hyperparameter choices. We show this floor is geometric in origin. Neural networks pack far more learned features into their hidden layers than they have dimensions, a phenomenon termed superposition. A student with hidden width dS can faithfully encode at most dS · g(α) of the teacher\'s features, where α is the feature sparsity and g(α) is a capacity function grounded in compressed sensing theory.',
    url: 'http://arxiv.org/abs/2604.04037',
  },
  {
    id: 6,
    type: 'project',
    title: 'gpt-oss — Flash Attention Fine-Tuning for OpenAI Open Weights',
    abstract:
      'An extended implementation of OpenAI\'s gpt-oss-120b and gpt-oss-20b open-weight models with Flash Attention fine-tuning support. Introduces Grouped Query Attention, Sliding Window Attention, and Attention Sinks — making training dramatically faster and more memory-efficient on the same hardware.',
    url: 'https://github.com/sunnnybala/gpt-oss',
    expandable: true,
    tags: ['Open Source', 'LLM', 'Fine-Tuning', 'Flash Attention'],
    projectDetails: {
      repo: 'https://github.com/sunnnybala/gpt-oss',
      highlights: [
        '~33× faster than naïve PyTorch fine-tuning',
        '~138× more memory-efficient on the same hardware',
        'Supports gpt-oss-120b (117B params) and gpt-oss-20b (21B params)',
        'Flash Attention + GQA + Sliding Window Attention + Attention Sinks',
        'MXFP4 quantization — runs 120B on a single H100 80GB',
        'Compatible with Transformers, vLLM, Ollama, and LM Studio',
      ],
      techStack: ['PyTorch', 'Triton', 'Flash Attention', 'vLLM', 'MXFP4', 'CUDA'],
    },
  },
]
