using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class AddedManyToMany : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Carts_CartID",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_CartID",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "CartID",
                table: "Items");

            migrationBuilder.CreateTable(
                name: "CartItem",
                columns: table => new
                {
                    CartsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ItemsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartItem", x => new { x.CartsId, x.ItemsId });
                    table.ForeignKey(
                        name: "FK_CartItem_Carts_CartsId",
                        column: x => x.CartsId,
                        principalTable: "Carts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CartItem_Items_ItemsId",
                        column: x => x.ItemsId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItem_ItemsId",
                table: "CartItem",
                column: "ItemsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartItem");

            migrationBuilder.AddColumn<Guid>(
                name: "CartID",
                table: "Items",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Items_CartID",
                table: "Items",
                column: "CartID");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Carts_CartID",
                table: "Items",
                column: "CartID",
                principalTable: "Carts",
                principalColumn: "Id");
        }
    }
}
