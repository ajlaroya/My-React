import { Card, Image, Text, Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

interface ProductProps {
  product: {
    handle: number;
    name: string;
    price: string;
    collection: string;
    image: string;
  };
}

export function ProductCard({ product }: ProductProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={product.image} alt={product.name} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>{product.name}</Text>
          <Text size="xs" color="dimmed">
            {product.handle}
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Details
        </Text>

        <Group spacing={8} mb={-8}>
          
    <Center key={product.handle}>
      <IconUsers size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{product.collection}</Text>
    </Center>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              ${product.price}
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            Buy now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}