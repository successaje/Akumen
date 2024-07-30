flowchart TD
    A[User Accesses Akumen Platform] --> B[User Logs In/Registers]
    B --> C[User Dashboard]
    C --> D[Select Game]
    D --> E{Available Games}
    E -->|Chess| F[Chess Game Setup]
    E -->|Scrabble| G[Scrabble Game Setup]
    E -->|Ludo| H[Ludo Game Setup]
    E -->|Card Games| I[Card Game Setup]
    F --> J[Start Playing Chess]
    G --> K[Start Playing Scrabble]
    H --> L[Start Playing Ludo]
    I --> M[Start Playing Card Games]
    J --> N[Stream Gameplay via Theta EdgeCloud]
    K --> O[Stream Gameplay via Theta EdgeCloud]
    L --> P[Stream Gameplay via Theta EdgeCloud]
    M --> Q[Stream Gameplay via Theta EdgeCloud]
    N --> R[Users Watch Live Streams]
    O --> R
    P --> R
    Q --> R
    R --> S[Users Interact via Social Features]
    S --> T[Comments and Reactions]
    S --> U[Follow and Subscribe to Players]
    S --> V[Join Multiplayer Games]
    T --> W[NFT-based DRM Secures Content]
    U --> W
    V --> X[Multiplayer Stream Setup]
    X --> Y[Stream Multiplayer Game via Theta EdgeCloud]
    Y --> R
    W --> Z[Leaderboard and Achievements]
    C --> AA[Access Leaderboard and Achievements]
    AA --> Z
