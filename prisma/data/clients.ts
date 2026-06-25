export const clientesData = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    dni: '30123456',
    email: 'juan.perez@example.com',
    telefono: '11-4444-5555',
    polizas: {
      create: [
        {
          numero: 'POL-001',
          tipo: 'AUTO' as const,
          compania: 'Mercantil Andina',
          premio: 15000,
          fechaInicio: new Date('2025-06-15'),
          fechaVencimiento: new Date('2026-06-15'),
          estado: 'VENCIDA' as const,
          pagos: { create: [
            { monto: 15000, fecha: new Date('2025-06-15'), estado: 'PAGADO' as const },
            { monto: 15000, fecha: new Date('2025-12-15'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'María',
    apellido: 'Gómez',
    dni: '28987654',
    email: 'maria.gomez@example.com',
    telefono: '11-3333-2222',
    polizas: {
      create: [
        {
          numero: 'POL-002',
          tipo: 'HOGAR' as const,
          compania: 'Sancor Seguros',
          premio: 8000,
          fechaInicio: new Date('2025-06-25'),
          fechaVencimiento: new Date('2026-06-25'),
          estado: 'POR_VENCER' as const,
          pagos: { create: [
            { monto: 8000, fecha: new Date('2025-06-25'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Carlos',
    apellido: 'Rodríguez',
    dni: '27456789',
    email: 'carlos.rodriguez@example.com',
    telefono: '11-5555-6666',
    polizas: {
      create: [
        {
          numero: 'POL-003',
          tipo: 'AUTO' as const,
          compania: 'La Caja',
          premio: 18000,
          fechaInicio: new Date('2025-09-01'),
          fechaVencimiento: new Date('2026-09-01'),
          estado: 'VIGENTE' as const,
          pagos: { create: [
            { monto: 18000, fecha: new Date('2025-09-01'), estado: 'PAGADO' as const },
            { monto: 18000, fecha: new Date('2026-06-01'), estado: 'PENDIENTE' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Ana',
    apellido: 'Fernández',
    dni: '32567891',
    email: 'ana.fernandez@example.com',
    telefono: '11-6666-7777',
    polizas: {
      create: [
        {
          numero: 'POL-004',
          tipo: 'VIDA' as const,
          compania: 'Zurich',
          premio: 5000,
          fechaInicio: new Date('2025-03-10'),
          fechaVencimiento: new Date('2026-03-10'),
          estado: 'RENOVADA' as const,
          pagos: { create: [
            { monto: 5000, fecha: new Date('2025-03-10'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Roberto',
    apellido: 'López',
    dni: '25678912',
    email: 'roberto.lopez@example.com',
    telefono: '11-7777-8888',
    polizas: {
      create: [
        {
          numero: 'POL-005',
          tipo: 'MOTO' as const,
          compania: 'Federación Patronal',
          premio: 6000,
          fechaInicio: new Date('2025-06-10'),
          fechaVencimiento: new Date('2026-06-10'),
          estado: 'VENCIDA' as const,
          pagos: { create: [
            { monto: 6000, fecha: new Date('2025-06-10'), estado: 'VENCIDO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Laura',
    apellido: 'Martínez',
    dni: '29789123',
    email: 'laura.martinez@example.com',
    telefono: '11-8888-9999',
    polizas: {
      create: [
        {
          numero: 'POL-006',
          tipo: 'COMERCIO' as const,
          compania: 'Río Uruguay',
          premio: 22000,
          fechaInicio: new Date('2025-08-20'),
          fechaVencimiento: new Date('2026-08-20'),
          estado: 'VIGENTE' as const,
          pagos: { create: [
            { monto: 22000, fecha: new Date('2025-08-20'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Diego',
    apellido: 'García',
    dni: '31890234',
    email: 'diego.garcia@example.com',
    telefono: '11-9999-0000',
    polizas: {
      create: [
        {
          numero: 'POL-007',
          tipo: 'AUTO' as const,
          compania: 'Allianz',
          premio: 16500,
          fechaInicio: new Date('2025-06-22'),
          fechaVencimiento: new Date('2026-06-22'),
          estado: 'POR_VENCER' as const,
          pagos: { create: [
            { monto: 16500, fecha: new Date('2025-06-22'), estado: 'PAGADO' as const },
            { monto: 16500, fecha: new Date('2026-05-22'), estado: 'PENDIENTE' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Patricia',
    apellido: 'Sánchez',
    dni: '26901345',
    email: 'patricia.sanchez@example.com',
    telefono: '11-1111-2222',
    polizas: {
      create: [
        {
          numero: 'POL-008',
          tipo: 'HOGAR' as const,
          compania: 'San Cristóbal',
          premio: 9500,
          fechaInicio: new Date('2025-11-05'),
          fechaVencimiento: new Date('2026-11-05'),
          estado: 'VIGENTE' as const,
          pagos: { create: [
            { monto: 9500, fecha: new Date('2025-11-05'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Miguel',
    apellido: 'Romero',
    dni: '33012456',
    email: 'miguel.romero@example.com',
    telefono: '11-2222-3333',
    polizas: {
      create: [
        {
          numero: 'POL-009',
          tipo: 'AUTO' as const,
          compania: 'Sancor Seguros',
          premio: 17000,
          fechaInicio: new Date('2025-06-05'),
          fechaVencimiento: new Date('2026-06-05'),
          estado: 'VENCIDA' as const,
          pagos: { create: [
            { monto: 17000, fecha: new Date('2025-06-05'), estado: 'PAGADO' as const },
            { monto: 17000, fecha: new Date('2025-12-05'), estado: 'VENCIDO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Silvia',
    apellido: 'Torres',
    dni: '24123567',
    email: 'silvia.torres@example.com',
    telefono: '11-3333-4444',
    polizas: {
      create: [
        {
          numero: 'POL-010',
          tipo: 'VIDA' as const,
          compania: 'La Caja',
          premio: 4500,
          fechaInicio: new Date('2025-04-18'),
          fechaVencimiento: new Date('2026-04-18'),
          estado: 'RENOVADA' as const,
          pagos: { create: [
            { monto: 4500, fecha: new Date('2025-04-18'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Fernando',
    apellido: 'Díaz',
    dni: '28234678',
    email: 'fernando.diaz@example.com',
    telefono: '11-4444-5566',
    polizas: {
      create: [
        {
          numero: 'POL-011',
          tipo: 'MOTO' as const,
          compania: 'Mercantil Andina',
          premio: 5500,
          fechaInicio: new Date('2025-06-28'),
          fechaVencimiento: new Date('2026-06-28'),
          estado: 'POR_VENCER' as const,
          pagos: { create: [
            { monto: 5500, fecha: new Date('2025-06-28'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Valeria',
    apellido: 'Morales',
    dni: '30345789',
    email: 'valeria.morales@example.com',
    telefono: '11-5555-6677',
    polizas: {
      create: [
        {
          numero: 'POL-012',
          tipo: 'COMERCIO' as const,
          compania: 'Zurich',
          premio: 25000,
          fechaInicio: new Date('2025-07-12'),
          fechaVencimiento: new Date('2026-07-12'),
          estado: 'VIGENTE' as const,
          pagos: { create: [
            { monto: 25000, fecha: new Date('2025-07-12'), estado: 'PAGADO' as const },
            { monto: 25000, fecha: new Date('2026-06-12'), estado: 'PENDIENTE' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Gustavo',
    apellido: 'Ortiz',
    dni: '27456890',
    email: 'gustavo.ortiz@example.com',
    telefono: '11-6666-7788',
    polizas: {
      create: [
        {
          numero: 'POL-013',
          tipo: 'AUTO' as const,
          compania: 'Federación Patronal',
          premio: 19000,
          fechaInicio: new Date('2025-06-01'),
          fechaVencimiento: new Date('2026-06-01'),
          estado: 'VENCIDA' as const,
          pagos: { create: [
            { monto: 19000, fecha: new Date('2025-06-01'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Cecilia',
    apellido: 'Castro',
    dni: '32567012',
    email: 'cecilia.castro@example.com',
    telefono: '11-7777-8899',
    polizas: {
      create: [
        {
          numero: 'POL-014',
          tipo: 'HOGAR' as const,
          compania: 'Allianz',
          premio: 10500,
          fechaInicio: new Date('2025-12-15'),
          fechaVencimiento: new Date('2026-12-15'),
          estado: 'VIGENTE' as const,
          pagos: { create: [
            { monto: 10500, fecha: new Date('2025-12-15'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Alejandro',
    apellido: 'Ramírez',
    dni: '25678123',
    email: 'alejandro.ramirez@example.com',
    telefono: '11-8888-9900',
    polizas: {
      create: [
        {
          numero: 'POL-015',
          tipo: 'AUTO' as const,
          compania: 'San Cristóbal',
          premio: 16000,
          fechaInicio: new Date('2025-06-24'),
          fechaVencimiento: new Date('2026-06-24'),
          estado: 'POR_VENCER' as const,
          pagos: { create: [
            { monto: 16000, fecha: new Date('2025-06-24'), estado: 'PAGADO' as const },
            { monto: 16000, fecha: new Date('2026-05-24'), estado: 'PENDIENTE' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Mónica',
    apellido: 'Flores',
    dni: '29789234',
    email: 'monica.flores@example.com',
    telefono: '11-9999-0011',
    polizas: {
      create: [
        {
          numero: 'POL-016',
          tipo: 'VIDA' as const,
          compania: 'Sancor Seguros',
          premio: 4800,
          fechaInicio: new Date('2025-05-30'),
          fechaVencimiento: new Date('2026-05-30'),
          estado: 'VENCIDA' as const,
          pagos: { create: [
            { monto: 4800, fecha: new Date('2025-05-30'), estado: 'PAGADO' as const },
            { monto: 4800, fecha: new Date('2025-11-30'), estado: 'VENCIDO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Pablo',
    apellido: 'Acosta',
    dni: '31890345',
    email: 'pablo.acosta@example.com',
    telefono: '11-1010-2020',
    polizas: {
      create: [
        {
          numero: 'POL-017',
          tipo: 'MOTO' as const,
          compania: 'La Caja',
          premio: 5200,
          fechaInicio: new Date('2025-09-15'),
          fechaVencimiento: new Date('2026-09-15'),
          estado: 'VIGENTE' as const,
          pagos: { create: [
            { monto: 5200, fecha: new Date('2025-09-15'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Gabriela',
    apellido: 'Suárez',
    dni: '26901456',
    email: 'gabriela.suarez@example.com',
    telefono: '11-2020-3030',
    polizas: {
      create: [
        {
          numero: 'POL-018',
          tipo: 'COMERCIO' as const,
          compania: 'Mercantil Andina',
          premio: 23000,
          fechaInicio: new Date('2025-06-30'),
          fechaVencimiento: new Date('2026-06-30'),
          estado: 'POR_VENCER' as const,
          pagos: { create: [
            { monto: 23000, fecha: new Date('2025-06-30'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Hernán',
    apellido: 'Medina',
    dni: '33012567',
    email: 'hernan.medina@example.com',
    telefono: '11-3030-4040',
    polizas: {
      create: [
        {
          numero: 'POL-019',
          tipo: 'AUTO' as const,
          compania: 'Río Uruguay',
          premio: 17500,
          fechaInicio: new Date('2025-04-22'),
          fechaVencimiento: new Date('2026-04-22'),
          estado: 'RENOVADA' as const,
          pagos: { create: [
            { monto: 17500, fecha: new Date('2025-04-22'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
  {
    nombre: 'Florencia',
    apellido: 'Vega',
    dni: '24123678',
    email: 'florencia.vega@example.com',
    telefono: '11-4040-5050',
    polizas: {
      create: [
        {
          numero: 'POL-020',
          tipo: 'HOGAR' as const,
          compania: 'Zurich',
          premio: 9000,
          fechaInicio: new Date('2025-06-12'),
          fechaVencimiento: new Date('2026-06-12'),
          estado: 'VENCIDA' as const,
          pagos: { create: [
            { monto: 9000, fecha: new Date('2025-06-12'), estado: 'PAGADO' as const },
          ]},
        },
      ],
    },
  },
];