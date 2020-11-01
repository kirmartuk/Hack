"""empty message

Revision ID: 8db6526e74e1
Revises: 6c7c8b48c747
Create Date: 2020-11-01 13:39:39.866385

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8db6526e74e1'
down_revision = '6c7c8b48c747'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('history', sa.Column('animal', sa.Integer(), nullable=True))
    op.create_index(op.f('ix_history_animal'), 'history', ['animal'], unique=False)
    op.create_foreign_key(None, 'history', 'animal', ['animal'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'history', type_='foreignkey')
    op.drop_index(op.f('ix_history_animal'), table_name='history')
    op.drop_column('history', 'animal')
    # ### end Alembic commands ###