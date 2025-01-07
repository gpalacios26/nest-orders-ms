import { OrderStatus } from '@prisma/client';

export const OrderStatusList = [
    OrderStatus.PENDING,
    OrderStatus.PAID,
    OrderStatus.DELIVERED,
    OrderStatus.CANCELLED,
]