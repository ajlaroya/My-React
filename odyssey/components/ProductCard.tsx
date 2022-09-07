import { useState } from "react";
import { useRouter } from "next/router";

import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
} from "@mantine/core";
import { IconUsers } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

// interface ProductProps {
//   product: {
//     handle: string;
//     title: string;
//     images: string[];
//     variants: string[];
//     id: string;
//   };
// }

export function ProductCard({ product, goToProductPage }: any) {
  const [showMore, setShowMore] = useState(false);
  const { id, title, images, variants, handle, description } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];
  const { classes } = useStyles();

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      onClick={() => goToProductPage(handle)}
    >
      <Card.Section className={classes.imageSection} 
          style={{ cursor: "pointer" }}>
        <Image
          src={`${productImage}?w=250&auto=format`}
          alt={title}
        />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>{title}</Text>
          <Text size="xs" color="dimmed">
            {showMore ? description : `${description.substring(0, 100)}...`}
          </Text>
          <Button
            compact
            variant="subtle"
            onClick={() => setShowMore(!showMore)}
          >
            Show more
          </Button>
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
            <Text size="xs">{handle}</Text>
          </Center>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              ${price}
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: 1 }}
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Buy now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
