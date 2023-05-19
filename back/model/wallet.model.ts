import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
    tableName: 'Wallet',
    omitNull: true,
    timestamps: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
})
export default class User extends Model {
    @PrimaryKey
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    public masterkey?: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    public password?: string;

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    public numberAccounts?: number;
}