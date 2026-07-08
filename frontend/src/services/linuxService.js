const linuxCommands = [
  // --- Fichiers et Dossiers ---
  {
    id: 'linux-ls',
    name: 'ls',
    command: 'ls',
    description: 'Liste le contenu d\'un répertoire (fichiers et dossiers)',
    category: 'Fichiers et Dossiers',
    example_code: 'ls -la',
    keywords: ['liste', 'lister', 'voir', 'afficher', 'fichiers', 'dossiers', 'répertoire'],
    examples: [
      {
        code: 'ls',
        explanation: 'Affiche les fichiers et dossiers du répertoire courant sous forme simple',
      },
      {
        code: 'ls -la',
        explanation: 'Affiche tous les fichiers, y compris les fichiers cachés (commençant par un point), avec les détails (permissions, taille, propriétaire)',
      },
      {
        code: 'ls -lh',
        explanation: 'Affiche la liste détaillée avec des tailles de fichiers lisibles par un humain (Ko, Mo, Go)',
      },
    ],
    options: [
      { flag: '-l', description: 'Utilise le format de liste détaillée' },
      { flag: '-a', description: 'Affiche tous les fichiers, y compris les fichiers cachés' },
      { flag: '-h', description: 'Affiche les tailles au format lisible (Human-readable)' },
    ],
  },
  {
    id: 'linux-cd',
    name: 'cd',
    command: 'cd',
    description: 'Change de répertoire de travail',
    category: 'Fichiers et Dossiers',
    example_code: 'cd /var/log',
    keywords: ['changer', 'déplacer', 'deplacer', 'navigation', 'dossier', 'répertoire', 'repertoire'],
    examples: [
      {
        code: 'cd /var/log',
        explanation: 'Déplace l\'utilisateur directement dans le dossier des journaux système (/var/log)',
      },
      {
        code: 'cd ..',
        explanation: 'Remonte d\'un niveau dans l\'arborescence (répertoire parent)',
      },
      {
        code: 'cd ~',
        explanation: 'Retourne instantanément dans le répertoire personnel (Home) de l\'utilisateur connecté',
      },
    ],
  },
  {
    id: 'linux-mkdir',
    name: 'mkdir',
    command: 'mkdir',
    description: 'Crée un ou plusieurs nouveaux répertoires',
    category: 'Fichiers et Dossiers',
    example_code: 'mkdir mon-projet',
    keywords: ['créer', 'creer', 'nouveau', 'dossier', 'répertoire', 'repertoire', 'make', 'directory'],
    examples: [
      {
        code: 'mkdir mon-projet',
        explanation: 'Crée un dossier nommé "mon-projet" dans le répertoire actuel',
      },
      {
        code: 'mkdir -p src/components/auth',
        explanation: 'Crée toute l\'arborescence de dossiers parents si elle n\'existe pas déjà',
      },
    ],
    options: [
      { flag: '-p', description: 'Crée les répertoires parents si nécessaire sans renvoyer d\'erreur' },
    ],
  },
  {
    id: 'linux-rm',
    name: 'rm',
    command: 'rm',
    description: 'Supprime des fichiers ou des répertoires',
    category: 'Fichiers et Dossiers',
    example_code: 'rm fichier.txt',
    keywords: ['supprimer', 'effacer', 'remove', 'delete', 'fichier', 'dossier'],
    examples: [
      {
        code: 'rm fichier.txt',
        explanation: 'Supprime définitivement le fichier spécifié',
      },
      {
        code: 'rm -rf mon-dossier',
        explanation: 'Supprime de manière récursive et forcée un dossier et tout son contenu (attention, commande destructive !)',
      },
    ],
    options: [
      { flag: '-r, -R', description: 'Supprime les répertoires et leur contenu de façon récursive' },
      { flag: '-f', description: 'Force la suppression sans demander de confirmation' },
      { flag: '-i', description: 'Demande une confirmation avant chaque suppression' },
    ],
  },

  // --- Système et Processus ---
  {
    id: 'linux-ps',
    name: 'ps',
    command: 'ps',
    description: 'Affiche un instantané des processus en cours d\'exécution',
    category: 'Système',
    example_code: 'ps aux',
    keywords: ['processus', 'tâches', 'taches', 'système', 'systeme', 'exécuter', 'execution', 'ps'],
    examples: [
      {
        code: 'ps',
        explanation: 'Affiche uniquement les processus associés à la session de terminal actuelle',
      },
      {
        code: 'ps aux',
        explanation: 'Affiche absolument tous les processus en cours sur la machine, avec le détail de l\'utilisateur, du CPU et de la mémoire',
      },
    ],
    options: [
      { flag: 'a', description: 'Affiche les processus de tous les utilisateurs' },
      { flag: 'u', description: 'Affiche l\'utilisateur/propriétaire de chaque processus' },
      { flag: 'x', description: 'Affiche les processus qui ne sont pas liés à un terminal' },
    ],
  },
  {
    id: 'linux-kill',
    name: 'kill',
    command: 'kill',
    description: 'Envoie un signal à un processus (généralement pour l\'arrêter)',
    category: 'Système',
    example_code: 'kill -9 1234',
    keywords: ['tuer', 'arrêter', 'arreter', 'stop', 'kill', 'processus', 'pid', 'forcer'],
    examples: [
      {
        code: 'kill 1234',
        explanation: 'Demande gentiment au processus avec le PID 1234 de s\'arrêter (signal SIGTERM)',
      },
      {
        code: 'kill -9 5678',
        explanation: 'Force l\'arrêt immédiat et brutal du processus avec le PID 5678 (signal SIGKILL)',
      },
    ],
    options: [
      { flag: '-9', description: 'Force l\'arrêt immédiat (SIGKILL)' },
      { flag: '-l', description: 'Liste tous les signaux disponibles' },
    ],
  },
  {
    id: 'linux-df',
    name: 'df',
    command: 'df',
    description: 'Affiche l\'utilisation de l\'espace disque des systèmes de fichiers',
    category: 'Système',
    example_code: 'df -h',
    keywords: ['disque', 'espace', 'stockage', 'mémoire', 'memoire', 'disk', 'free', 'partition'],
    examples: [
      {
        code: 'df -h',
        explanation: 'Affiche l\'espace libre et occupé sur toutes les partitions dans un format lisible (Go, Mo)',
      },
    ],
    options: [
      { flag: '-h', description: 'Affiche les tailles dans un format lisible par l\'homme' },
      { flag: '-T', description: 'Affiche le type de système de fichiers (ext4, vfat, etc.)' },
    ],
  },

  // --- Texte et Recherche ---
  {
    id: 'linux-cat',
    name: 'cat',
    command: 'cat',
    description: 'Concatène et affiche le contenu de fichiers',
    category: 'Texte et Recherche',
    example_code: 'cat config.json',
    keywords: ['afficher', 'voir', 'lire', 'contenu', 'fichier', 'texte', 'cat'],
    examples: [
      {
        code: 'cat mon-fichier.txt',
        explanation: 'Affiche l\'intégralité du contenu de mon-fichier.txt dans le terminal',
      },
    ],
  },
  {
    id: 'linux-grep',
    name: 'grep',
    command: 'grep',
    description: 'Recherche des motifs de texte dans des fichiers ou des flux',
    category: 'Texte et Recherche',
    example_code: 'grep "error" /var/log/nginx/error.log',
    keywords: ['rechercher', 'chercher', 'trouver', 'filtrer', 'mot', 'texte', 'grep', 'search'],
    examples: [
      {
        code: 'grep "mot_cle" fichier.txt',
        explanation: 'Affiche toutes les lignes de fichier.txt qui contiennent "mot_cle"',
      },
      {
        code: 'ps aux | grep node',
        explanation: 'Filtre la liste de tous les processus pour n\'afficher que ceux qui contiennent le mot "node"',
      },
    ],
    options: [
      { flag: '-i', description: 'Ignore la casse (ne fait pas de différence entre majuscules et minuscules)' },
      { flag: '-r, -R', description: 'Recherche de manière récursive dans tous les sous-dossiers' },
      { flag: '-n', description: 'Affiche le numéro de la ligne correspondante dans le fichier' },
    ],
  },

  // --- Réseau ---
  {
    id: 'linux-ping',
    name: 'ping',
    command: 'ping',
    description: 'Envoie des paquets ICMP vers une machine pour tester sa connectivité',
    category: 'Réseau',
    example_code: 'ping google.com',
    keywords: ['réseau', 'reseau', 'connectivité', 'connectivite', 'test', 'ping', 'adresse', 'ip'],
    examples: [
      {
        code: 'ping 8.8.8.8',
        explanation: 'Envoie des paquets en continu à l\'adresse IP spécifiée pour vérifier si elle répond',
      },
      {
        code: 'ping -c 4 google.com',
        explanation: 'Envoie exactement 4 paquets de test puis s\'arrête automatiquement',
      },
    ],
    options: [
      { flag: '-c', description: 'Nombre maximum de paquets à envoyer avant l\'arrêt' },
    ],
  }
];

export const linuxService = {
  getAllCommands: () => {
    return linuxCommands;
  },

  getCategories: () => {
    const categories = linuxCommands.map(cmd => cmd.category);
    return ['Toutes', ...new Set(categories)];
  },

  getCommandsByCategory: (category) => {
    if (!category || category === 'Toutes') {
      return linuxCommands;
    }
    return linuxCommands.filter(cmd => cmd.category === category);
  }
};